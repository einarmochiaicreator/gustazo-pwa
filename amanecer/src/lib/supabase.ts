import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Un solo cliente, sólo en el server, con la service_role key.
// Las tablas nocturno_* tienen RLS activo sin políticas: nadie entra
// desde el navegador; todo pasa por acá.
let cliente: SupabaseClient | null = null;

export function db(): SupabaseClient {
  if (cliente) return cliente;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Faltan SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en las variables de entorno.");
  }
  cliente = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cliente;
}

export async function traerNoches(limite = 120) {
  const { data, error } = await db()
    .from("nocturno_noches")
    .select("*")
    .order("fecha", { ascending: false })
    .limit(limite);
  if (error) throw new Error(`Error leyendo noches: ${error.message}`);
  return data ?? [];
}
