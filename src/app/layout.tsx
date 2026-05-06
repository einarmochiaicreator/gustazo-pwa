import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Providers from "@/components/Providers";
import { ConstructionIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Gustazo",
  description:
    "Productos artesanales sin gluten elaborados con amor en Córdoba, Argentina.",
  applicationName: "Gustazo",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Gustazo",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192" }],
  },
  openGraph: {
    title: "Gustazo",
    description:
      "Productos artesanales sin gluten elaborados con amor en Córdoba, Argentina.",
    type: "website",
    locale: "es_AR",
  },
};

export const viewport: Viewport = {
  themeColor: "#5C0A14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <body>
        <div
          className="sticky top-0 z-50 flex items-center justify-center gap-2 py-2 text-xs font-bold uppercase tracking-widest"
          style={{ backgroundColor: "#C9A227", color: "#5C0A14" }}
        >
          <ConstructionIcon className="h-3.5 w-3.5" />
          Sitio web en construcción
          <ConstructionIcon className="h-3.5 w-3.5" />
        </div>
        <Providers>
          <CartProvider>
            {children}
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
