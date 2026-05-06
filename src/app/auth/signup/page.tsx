"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({ nombre: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function update(k: keyof typeof form, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: form.nombre, email: form.email, password: form.password }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "Error al registrarse.");
      setLoading(false);
      return;
    }
    // Auto sign-in after register
    await signIn("credentials", { email: form.email, password: form.password, redirect: false });
    router.push("/perfil");
  }

  return (
    <main style={{ backgroundColor: "#faf6ee", minHeight: "100vh" }} className="flex flex-col items-center justify-center px-4 py-16">
      <Link href="/" className="mb-8 flex flex-col items-center gap-2">
        <div className="relative h-16 w-16">
          <Image src="/logo-gustazo.png" alt="Gustazo" fill className="object-contain" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#5C0A14" }}>
          Gustazo
        </span>
      </Link>

      <div className="w-full max-w-sm bg-white p-8" style={{ border: "1px solid #e8dcc8" }}>
        <h1 className="mb-6 text-xl font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
          Crear cuenta
        </h1>

        {error && (
          <p className="mb-4 rounded px-3 py-2 text-sm" style={{ backgroundColor: "#fdecea", color: "#b71c1c" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Nombre *
            </label>
            <input
              type="text" required
              value={form.nombre}
              onChange={(e) => update("nombre", e.target.value)}
              placeholder="Tu nombre"
              className="auth-input"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Email *
            </label>
            <input
              type="email" required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="tu@email.com"
              className="auth-input"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Contraseña *
            </label>
            <input
              type="password" required minLength={6}
              value={form.password}
              onChange={(e) => update("password", e.target.value)}
              placeholder="Mínimo 6 caracteres"
              className="auth-input"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Confirmar contraseña *
            </label>
            <input
              type="password" required
              value={form.confirm}
              onChange={(e) => update("confirm", e.target.value)}
              placeholder="Repetí tu contraseña"
              className="auth-input"
            />
          </div>

          <button
            type="submit" disabled={loading}
            className="w-full py-3 text-sm font-bold uppercase tracking-wide transition active:scale-[0.98] disabled:opacity-60"
            style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "3px" }}
          >
            {loading ? "Creando cuenta..." : "Registrarse"}
          </button>
        </form>

        <p className="mt-5 text-center text-xs" style={{ color: "#7a5a5e" }}>
          ¿Ya tenés cuenta?{" "}
          <Link href="/auth/signin" className="font-semibold hover:underline" style={{ color: "#5C0A14" }}>
            Iniciá sesión
          </Link>
        </p>
      </div>

      <style jsx global>{`
        .auth-input {
          width: 100%;
          border: 1.5px solid #d0c4b0;
          padding: 0.625rem 0.875rem;
          font-size: 0.875rem;
          color: #1a0a0c;
          background: #fff;
          outline: none;
          transition: border-color 0.15s;
          border-radius: 0;
        }
        .auth-input:focus { border-color: #5C0A14; }
      `}</style>
    </main>
  );
}
