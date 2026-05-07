"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/perfil";
  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      setError("Email o contraseña incorrectos.");
    } else {
      router.push(callbackUrl);
    }
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
          Iniciar sesión
        </h1>

        {error && (
          <p className="mb-4 rounded px-3 py-2 text-sm" style={{ backgroundColor: "#fdecea", color: "#b71c1c" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Email *
            </label>
            <input
              type="email" required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              placeholder="tu@email.com"
              className="auth-input"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wide" style={{ color: "#5C0A14" }}>
              Contraseña *
            </label>
            <input
              type="password" required
              value={form.password}
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
              placeholder="••••••••"
              className="auth-input"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              id="remember" type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 cursor-pointer"
              style={{ accentColor: "#5C0A14" }}
            />
            <label htmlFor="remember" className="cursor-pointer text-xs" style={{ color: "#7a5a5e" }}>
              Recuérdame
            </label>
          </div>

          <button
            type="submit" disabled={loading}
            className="w-full py-3 text-sm font-bold uppercase tracking-wide transition active:scale-[0.98] disabled:opacity-60"
            style={{ backgroundColor: "#5C0A14", color: "#C9A227", borderRadius: "8px" }}
          >
            {loading ? "Ingresando..." : "Acceso"}
          </button>
        </form>

        <div className="mt-5 space-y-2 text-center">
          <Link href="/auth/forgot" className="block text-xs hover:underline" style={{ color: "#7a5a5e" }}>
            ¿Olvidaste tu contraseña?
          </Link>
          <p className="text-xs" style={{ color: "#7a5a5e" }}>
            ¿No tenés cuenta?{" "}
            <Link href="/auth/signup" className="font-semibold hover:underline" style={{ color: "#5C0A14" }}>
              Registrate
            </Link>
          </p>
        </div>
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

export default function SignInPage() {
  return (
    <Suspense>
      <SignInForm />
    </Suspense>
  );
}
