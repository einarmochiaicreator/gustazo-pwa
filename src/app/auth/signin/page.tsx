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

        <div className="my-5 flex items-center gap-3">
          <span className="h-px flex-1" style={{ backgroundColor: "#e8dcc8" }} />
          <span className="text-xs uppercase tracking-wide" style={{ color: "#7a5a5e" }}>o</span>
          <span className="h-px flex-1" style={{ backgroundColor: "#e8dcc8" }} />
        </div>

        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl })}
          className="flex w-full items-center justify-center gap-2 border py-3 text-sm font-semibold transition active:scale-[0.98]"
          style={{ borderColor: "#d0c4b0", color: "#1a0a0c", backgroundColor: "#fff", borderRadius: "8px" }}
        >
          <svg className="h-5 w-5" viewBox="0 0 48 48" aria-hidden>
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6 8-11.3 8a12 12 0 110-24c3 0 5.8 1.1 7.9 3l5.7-5.7A20 20 0 1024 44a20 20 0 0019.6-23.5z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8A12 12 0 0124 16c3 0 5.8 1.1 7.9 3l5.7-5.7A20 20 0 006.3 14.7z"/>
            <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3a12 12 0 01-7.3 2.5c-5.3 0-9.7-3.3-11.3-7.9l-6.6 5C9 39.6 16 44 24 44z"/>
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 01-4 5.5l6.3 5.3C39 36.5 44 31 44 24c0-1.2-.1-2.4-.4-3.5z"/>
          </svg>
          Continuar con Google
        </button>

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
