import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/supabase";
import { hoy } from "@/lib/fechas";
import { CAMPOS_NUMERICOS, CAMPOS_FECHA_HORA, CAMPOS_TEXTO } from "@/lib/tipos";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// El endpoint del Atajo. Filosofía: máxima tolerancia con el formato
// (los Atajos son frágiles) y máxima trazabilidad (todo POST queda
// crudo en nocturno_ingestas, ande o no ande).
//
// Acepta cualquier subconjunto de campos; los ausentes NO pisan lo ya
// guardado. Números como string ("411", "7,2") también valen.

function tokenValido(req: NextRequest): boolean {
  const esperado = process.env.INGEST_TOKEN;
  if (!esperado) return false;
  const auth = req.headers.get("authorization") ?? "";
  const bearer = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  const query = req.nextUrl.searchParams.get("token");
  return bearer === esperado || query === esperado;
}

function aNumero(v: unknown): number | null {
  if (typeof v === "number" && isFinite(v)) return v;
  if (typeof v === "string") {
    const n = parseFloat(v.replace(",", ".").trim());
    if (isFinite(n)) return n;
  }
  return null;
}

function aFechaHora(v: unknown): string | null {
  if (typeof v !== "string" || !v.trim()) return null;
  const d = new Date(v.trim());
  return isNaN(d.getTime()) ? null : d.toISOString();
}

export async function GET(req: NextRequest) {
  // Prueba de conexión para armar el Atajo: /api/ingest?token=...&ping=1
  if (!tokenValido(req)) {
    return NextResponse.json({ ok: false, error: "token inválido" }, { status: 401 });
  }
  return NextResponse.json({ ok: true, mensaje: "Amanecer te escucha. Mandá el POST cuando quieras." });
}

export async function POST(req: NextRequest) {
  if (!tokenValido(req)) {
    return NextResponse.json({ ok: false, error: "token inválido" }, { status: 401 });
  }

  let crudo: unknown;
  try {
    crudo = await req.json();
  } catch {
    await db().from("nocturno_ingestas").insert({ payload: { error: "body no es JSON" }, ok: false, detalle: "JSON inválido" });
    return NextResponse.json({ ok: false, error: "el body no es JSON válido" }, { status: 400 });
  }

  const body = (typeof crudo === "object" && crudo !== null ? crudo : {}) as Record<string, unknown>;

  // fecha de despertar: la manda el Atajo o se asume hoy (hora argentina)
  let fecha = typeof body.fecha === "string" && /^\d{4}-\d{2}-\d{2}$/.test(body.fecha) ? body.fecha : hoy();

  const fila: Record<string, unknown> = { fecha };
  for (const campo of CAMPOS_NUMERICOS) {
    if (campo in body) {
      const n = aNumero(body[campo]);
      if (n != null) fila[campo] = n;
    }
  }
  for (const campo of CAMPOS_FECHA_HORA) {
    if (campo in body) {
      const f = aFechaHora(body[campo]);
      if (f != null) fila[campo] = f;
    }
  }
  for (const campo of CAMPOS_TEXTO) {
    if (campo in body && typeof body[campo] === "string" && (body[campo] as string).trim()) {
      fila[campo] = (body[campo] as string).trim().slice(0, 120);
    }
  }

  const recibidos = Object.keys(fila).filter((k) => k !== "fecha");
  if (recibidos.length === 0) {
    await db().from("nocturno_ingestas").insert({ payload: body, ok: false, detalle: "sin campos reconocibles" });
    return NextResponse.json(
      { ok: false, error: "no llegó ningún campo reconocible", esperados: [...CAMPOS_NUMERICOS, ...CAMPOS_FECHA_HORA] },
      { status: 422 }
    );
  }

  // merge: leo lo existente y sólo escribo las claves que llegaron
  const base = db();
  const { data: existente, error: errorLectura } = await base
    .from("nocturno_noches")
    .select("fecha")
    .eq("fecha", fecha)
    .maybeSingle();

  let errorEscritura: string | null = null;
  if (!errorLectura && existente) {
    const { error } = await base.from("nocturno_noches").update(fila).eq("fecha", fecha);
    errorEscritura = error?.message ?? null;
  } else {
    const { error } = await base.from("nocturno_noches").insert(fila);
    errorEscritura = error?.message ?? null;
  }

  await base.from("nocturno_ingestas").insert({
    payload: body,
    ok: !errorEscritura,
    detalle: errorEscritura ?? `guardados: ${recibidos.join(", ")}`,
  });

  if (errorEscritura) {
    return NextResponse.json({ ok: false, error: errorEscritura }, { status: 500 });
  }
  return NextResponse.json({ ok: true, fecha, guardados: recibidos });
}
