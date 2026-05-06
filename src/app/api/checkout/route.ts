import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

const mp = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN ?? "",
});

export async function POST(req: Request) {
  if (!process.env.MP_ACCESS_TOKEN) {
    return NextResponse.json({ error: "MercadoPago no configurado" }, { status: 500 });
  }

  let body: {
    items: { id: string; title: string; unit_price: number; quantity: number }[];
    payer: { name: string; email: string; phone: string };
    delivery: "retiro" | "delivery";
    address?: string;
    notes?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body inválido" }, { status: 400 });
  }

  const { items, payer, delivery, address, notes } = body;

  if (!items?.length) {
    return NextResponse.json({ error: "Pedido vacío" }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://gustazoglutenfree.com";

  try {
    const preference = new Preference(mp);
    const result = await preference.create({
      body: {
        items: items.map((item) => ({
          id: item.id,
          title: item.title,
          unit_price: item.unit_price,
          quantity: item.quantity,
          currency_id: "ARS",
        })),
        payer: {
          name: payer.name,
          email: payer.email,
          phone: { number: payer.phone },
        },
        back_urls: {
          success: `${baseUrl}/checkout/success`,
          failure: `${baseUrl}/checkout/failure`,
          pending: `${baseUrl}/checkout/pending`,
        },
        auto_return: "approved",
        statement_descriptor: "Gustazo Gluten Free",
        additional_info: [
          `Modalidad: ${delivery === "retiro" ? "Retiro en local" : `Delivery a: ${address}`}`,
          notes ? `Notas: ${notes}` : "",
        ]
          .filter(Boolean)
          .join(" | "),
      },
    });

    return NextResponse.json({ init_point: result.init_point });
  } catch (err) {
    console.error("[checkout] MP error:", err);
    return NextResponse.json({ error: "Error al crear preferencia de pago" }, { status: 500 });
  }
}
