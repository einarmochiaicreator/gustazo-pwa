import { NextResponse } from "next/server";
import { createUser } from "@/lib/users";

export async function POST(req: Request) {
  const { nombre, email, password } = await req.json();
  if (!nombre || !email || !password) {
    return NextResponse.json({ error: "Todos los campos son requeridos." }, { status: 400 });
  }
  if (password.length < 6) {
    return NextResponse.json({ error: "La contraseña debe tener al menos 6 caracteres." }, { status: 400 });
  }
  const user = await createUser(nombre, email, password);
  if (!user) {
    return NextResponse.json({ error: "Ya existe una cuenta con ese email." }, { status: 409 });
  }
  return NextResponse.json({ ok: true });
}
