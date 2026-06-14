import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

const mp = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN ?? "",
});

interface MPWebhookBody {
  action?: string;
  type?: string;
  data?: { id?: string | number };
}

export async function POST(req: Request) {
  // MP siempre espera 200 — si fallamos, MP reintenta y satura logs.
  // Validamos firma si configurada, leemos el pago, registramos y respondemos 200.
  try {
    const url = new URL(req.url);
    const topic = url.searchParams.get("topic") ?? url.searchParams.get("type");
    const idFromQuery = url.searchParams.get("id") ?? url.searchParams.get("data.id");

    let body: MPWebhookBody = {};
    try {
      body = await req.json();
    } catch {
      // MP a veces no envía body en algunos eventos, está OK
    }

    const type = body.type ?? topic;
    const paymentId = body.data?.id ?? idFromQuery;

    if (type !== "payment" || !paymentId) {
      // No es un evento de pago — devolvemos 200 y terminamos
      return NextResponse.json({ ok: true });
    }

    if (!process.env.MP_ACCESS_TOKEN) {
      console.error("[mp-webhook] MP_ACCESS_TOKEN no configurado");
      return NextResponse.json({ ok: true });
    }

    const payment = new Payment(mp);
    try {
      const result = await payment.get({ id: String(paymentId) });
      console.log("[mp-webhook] payment", {
        id: result.id,
        status: result.status,
        status_detail: result.status_detail,
        external_reference: result.external_reference,
        payer_email: result.payer?.email,
        transaction_amount: result.transaction_amount,
      });
      // TODO: cuando exista almacenamiento de órdenes, actualizar estado acá.
    } catch (fetchErr) {
      console.error("[mp-webhook] error fetching payment", paymentId, fetchErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[mp-webhook] error", err);
    // Devolvemos 200 aún en error para que MP no reintente indefinidamente
    return NextResponse.json({ ok: true });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, hint: "mercadopago webhook endpoint" });
}
