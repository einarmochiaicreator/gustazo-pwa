import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";

export const metadata: Metadata = {
  title: "Gustazo Gluten Free",
  description:
    "Productos artesanales sin gluten elaborados con amor en Córdoba, Argentina.",
  applicationName: "Gustazo Gluten Free",
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
    title: "Gustazo Gluten Free",
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
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
