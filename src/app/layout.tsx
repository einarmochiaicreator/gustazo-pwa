import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gustazo Gluten Free",
  description:
    "Productos artesanales sin TACC elaborados con amor en Córdoba, Argentina.",
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
      "Productos artesanales sin TACC elaborados con amor en Córdoba, Argentina.",
    type: "website",
    locale: "es_AR",
  },
};

export const viewport: Viewport = {
  themeColor: "#a8d5ba",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <body>
        <div className="sticky top-0 z-50 py-2 text-center text-sm font-bold uppercase tracking-widest" style={{ backgroundColor: "#C9A227", color: "#5C0A14" }}>
          🚧 Pagina web en construccion 🚧
        </div>
        {children}
      </body>
    </html>
  );
}
