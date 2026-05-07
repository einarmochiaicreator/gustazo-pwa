import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, WhatsAppIcon, MailIcon } from "@/components/Icons";

const WA_NUMBER = "5493516632462";
const EMAIL = "glutenfree.gustazo@gmail.com";
const IG_URL = "https://www.instagram.com/gustazo.glutenfree";
const FB_URL = "https://www.facebook.com/gustazoglutenfree";

export default function Footer() {
  return (
    <footer className="py-8" style={{ backgroundColor: "#5C0A14", color: "#e8d4b0" }}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Línea 1 — logo + misión a la izquierda, redes a la derecha */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-8">
          <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-center md:text-left">
            <div className="relative h-10 w-10 shrink-0">
              <Image
                src="/assets/logos/gustazo-blanco.png"
                alt="Gustazo"
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <p className="max-w-md text-sm leading-relaxed" style={{ color: "#e8d4b0", opacity: 0.85 }}>
              Contribuir para que todos puedan disfrutar de experiencias ricas y saludables.
            </p>
          </div>

          <div className="flex gap-5">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="opacity-60 transition-opacity hover:opacity-100"
              style={{ color: "#e8d4b0" }}
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="opacity-60 transition-opacity hover:opacity-100"
              style={{ color: "#e8d4b0" }}
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="opacity-60 transition-opacity hover:opacity-100"
              style={{ color: "#e8d4b0" }}
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="opacity-60 transition-opacity hover:opacity-100"
              style={{ color: "#e8d4b0" }}
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6" style={{ borderTop: "1px solid rgba(232,212,176,0.15)" }} />

        {/* Línea 2 — legales a la izquierda, copyright a la derecha */}
        <div
          className="flex flex-col items-center gap-3 text-xs md:flex-row md:justify-between"
          style={{ color: "#e8d4b0", opacity: 0.7 }}
        >
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <Link href="/aviso-legal" className="hover:underline underline-offset-2">
              Aviso legal
            </Link>
            <Link href="/politica-privacidad" className="hover:underline underline-offset-2">
              Política de privacidad
            </Link>
            <Link href="/terminos-condiciones" className="hover:underline underline-offset-2">
              Términos y condiciones
            </Link>
          </div>
          <p>Hecho con cariño en Córdoba · © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
