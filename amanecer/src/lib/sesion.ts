// Sesión mínima para una app de una sola persona:
// la cookie guarda un HMAC-SHA256 de un texto fijo con APP_CLAVE como
// secreto. Sin tabla de usuarios, sin JWT: suficiente y auditable.
// Usa Web Crypto para funcionar igual en middleware (Edge) y en Node.

export const COOKIE_SESION = "amanecer_sesion";
const MARCA = "amanecer-v1";

export async function firmaSesion(clave: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(clave),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(MARCA));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function sesionValida(valorCookie: string | undefined): Promise<boolean> {
  const clave = process.env.APP_CLAVE;
  if (!clave || !valorCookie) return false;
  const esperado = await firmaSesion(clave);
  if (valorCookie.length !== esperado.length) return false;
  // comparación en tiempo constante
  let dif = 0;
  for (let i = 0; i < esperado.length; i++) {
    dif |= valorCookie.charCodeAt(i) ^ esperado.charCodeAt(i);
  }
  return dif === 0;
}
