import { NextRequest, NextResponse } from "next/server";
import { COOKIE_SESION, sesionValida } from "@/lib/sesion";

// Todo requiere sesión salvo: la pantalla de entrada, el login,
// y el endpoint del Atajo (que tiene su propio token).
const LIBRES = ["/entrar", "/api/entrar", "/api/ingest"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (LIBRES.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get(COOKIE_SESION)?.value;
  if (await sesionValida(cookie)) return NextResponse.next();

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "sin sesión" }, { status: 401 });
  }
  const destino = req.nextUrl.clone();
  destino.pathname = "/entrar";
  destino.search = "";
  return NextResponse.redirect(destino);
}

export const config = {
  // Deja pasar estáticos de Next y archivos públicos.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|manifest.json|iconos/).*)"],
};
