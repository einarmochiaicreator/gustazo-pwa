import { NextRequest, NextResponse } from "next/server";
import { COOKIE_SESION, firmaSesion } from "@/lib/sesion";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const clave = process.env.APP_CLAVE;
  if (!clave) {
    return NextResponse.json({ ok: false, error: "APP_CLAVE no está configurada" }, { status: 500 });
  }

  let intento = "";
  try {
    const body = await req.json();
    intento = typeof body?.clave === "string" ? body.clave : "";
  } catch {
    /* body vacío */
  }

  if (intento !== clave) {
    return NextResponse.json({ ok: false, error: "clave incorrecta" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_SESION, await firmaSesion(clave), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 180, // medio año: es tu teléfono
    path: "/",
  });
  return res;
}
