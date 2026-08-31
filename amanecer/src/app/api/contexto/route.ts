import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/supabase";
import { hoy, haceDias } from "@/lib/fechas";
import { CAMPOS_CONTEXTO } from "@/lib/tipos";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Guarda el checklist nocturno. Convención: el registro de la noche del
// día X pertenece a la fila del despertar de X+1 (mañana). Si se carga
// a la mañana siguiente ("anoche"), va a la fila de hoy.

function validar(campo: keyof typeof CAMPOS_CONTEXTO, v: unknown): unknown | undefined {
  const tipo = CAMPOS_CONTEXTO[campo];
  if (v === null) return null; // borrar un valor es válido
  switch (tipo) {
    case "hora":
      return typeof v === "string" && /^\d{1,2}:\d{2}$/.test(v) ? v : undefined;
    case "escala": {
      const n = typeof v === "number" ? v : NaN;
      return Number.isInteger(n) && n >= 1 && n <= 5 ? n : undefined;
    }
    case "entero": {
      const n = typeof v === "number" ? v : NaN;
      return Number.isInteger(n) && n >= 0 && n <= 1440 ? n : undefined;
    }
    case "texto":
      return typeof v === "string" ? v.slice(0, 500) : undefined;
  }
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  // "cuando": "esta_noche" (antes de dormir → fila de mañana)
  //           "anoche"     (a la mañana → fila de hoy)
  const cuando = body.cuando === "anoche" ? "anoche" : "esta_noche";
  const fecha =
    typeof body.fecha === "string" && /^\d{4}-\d{2}-\d{2}$/.test(body.fecha)
      ? body.fecha
      : cuando === "anoche"
        ? hoy()
        : haceDias(-1);

  const fila: Record<string, unknown> = {};
  for (const campo of Object.keys(CAMPOS_CONTEXTO) as (keyof typeof CAMPOS_CONTEXTO)[]) {
    if (campo in body) {
      const v = validar(campo, body[campo]);
      if (v !== undefined) fila[campo] = v;
    }
  }
  if (Object.keys(fila).length === 0) {
    return NextResponse.json({ ok: false, error: "nada válido para guardar" }, { status: 422 });
  }

  const base = db();
  const { data: existente, error: errLectura } = await base
    .from("nocturno_noches")
    .select("fecha")
    .eq("fecha", fecha)
    .maybeSingle();
  if (errLectura) {
    return NextResponse.json({ ok: false, error: errLectura.message }, { status: 500 });
  }

  const { error } = existente
    ? await base.from("nocturno_noches").update(fila).eq("fecha", fecha)
    : await base.from("nocturno_noches").insert({ fecha, ...fila });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true, fecha, guardados: Object.keys(fila) });
}
