import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Providers from "@/components/Providers";
import ChatBot from "@/components/ChatBot";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Gustazo",
  description:
    "Especialistas en productos sin gluten. Establecimiento elaborador certificado en Córdoba, Argentina.",
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
      "Especialistas en productos sin gluten. Establecimiento elaborador certificado en Córdoba, Argentina.",
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
    <html lang="es-AR" className={quicksand.variable}>
      <body className={quicksand.className}>
        <Providers>
          <CartProvider>
            {children}
            <ChatBot />
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
