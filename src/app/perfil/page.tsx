"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Link from "next/link";

export default function PerfilPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin?callbackUrl=/perfil");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <>
        <Header />
        <main className="flex min-h-screen items-center justify-center" style={{ backgroundColor: "#faf6ee" }}>
          <p className="text-sm" style={{ color: "#7a5a5e" }}>Cargando...</p>
        </main>
      </>
    );
  }

  if (!session) return null;

  return (
    <>
      <Header />
      <CartDrawer />

      <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        {/* HERO */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#5C0A14", minHeight: "220px" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(60,4,14,0.4)" }} />
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 pb-24">
            <h1 className="text-5xl font-semibold uppercase leading-tight tracking-wide md:text-6xl" style={{ color: "#fff" }}>
              Mi cuenta
            </h1>
            <p className="mt-3 text-base" style={{ color: "rgba(255,255,255,0.8)" }}>
              Bienvenido/a, {session.user?.name}
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12"
            style={{ background: "#fff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Sidebar */}
            <div className="space-y-2">
              <nav className="divide-y" style={{ borderTop: "1px solid #e8dcc8", borderBottom: "1px solid #e8dcc8" }}>
                {[
                  { label: "Mis datos", href: "/perfil" },
                  { label: "Mis pedidos", href: "/perfil/pedidos" },
                  { label: "Mis direcciones", href: "/perfil/direcciones" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium transition hover:underline"
                    style={{ color: "#5C0A14", borderColor: "#e8dcc8" }}
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="block w-full px-4 py-3 text-left text-sm font-medium transition hover:underline"
                  style={{ color: "#7a5a5e", borderColor: "#e8dcc8" }}
                >
                  Cerrar sesión
                </button>
              </nav>
            </div>

            {/* Main content */}
            <div className="md:col-span-2">
              <h2 className="mb-6 text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14", borderBottom: "2px solid #C9A227", paddingBottom: "0.5rem" }}>
                Mis datos
              </h2>
              <div className="space-y-4 text-sm" style={{ color: "#1a0a0c" }}>
                <div className="flex gap-4">
                  <span className="w-24 font-semibold uppercase tracking-wide text-xs" style={{ color: "#7a5a5e" }}>Nombre</span>
                  <span>{session.user?.name}</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-24 font-semibold uppercase tracking-wide text-xs" style={{ color: "#7a5a5e" }}>Email</span>
                  <span>{session.user?.email}</span>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="mb-4 text-lg font-semibold uppercase tracking-wide" style={{ color: "#5C0A14", borderBottom: "2px solid #C9A227", paddingBottom: "0.5rem" }}>
                  Pedidos recientes
                </h2>
                <p className="text-sm" style={{ color: "#7a5a5e" }}>
                  Todavía no realizaste ningún pedido.{" "}
                  <Link href="/" className="font-semibold hover:underline" style={{ color: "#5C0A14" }}>
                    Ver productos →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-xs" style={{ backgroundColor: "#5C0A14", color: "#e8d4b0" }}>
          <p className="font-semibold uppercase tracking-widest" style={{ color: "#C9A227" }}>Gustazo</p>
          <p className="mt-2 opacity-70">R.N.E.: 04006318 · Elaboración bajo BPM · Sin contaminación cruzada</p>
          <p className="mt-1 opacity-70">Hecho con cariño en Córdoba · © {new Date().getFullYear()}</p>
        </footer>
      </main>
    </>
  );
}
