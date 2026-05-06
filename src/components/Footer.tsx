import Link from "next/link";
import { InstagramIcon, WhatsAppIcon, MailIcon } from "@/components/Icons";

const WA_NUMBER = "5493516632462";
const EMAIL = "glutenfree.gustazo@gmail.com";
const IG_URL = "https://www.instagram.com/gustazo.glutenfree";
const FB_URL = "https://www.facebook.com/gustazoglutenfree";

export default function Footer() {
  return (
    <footer className="py-12 text-center text-xs" style={{ backgroundColor: "#5C0A14", color: "#e8d4b0" }}>
      <p className="font-semibold uppercase tracking-widest" style={{ color: "#C9A227" }}>Gustazo</p>

      <p className="mx-auto mt-4 max-w-xl px-6 text-sm leading-relaxed" style={{ color: "#e8d4b0", opacity: 0.85 }}>
        Contribuir para que todos puedan disfrutar de experiencias ricas y saludables.
      </p>

      <div className="mt-6 flex justify-center gap-5">
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

      <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-1">
        <Link href="/aviso-legal" className="opacity-60 transition-opacity hover:opacity-100 hover:underline underline-offset-2">
          Aviso legal
        </Link>
        <Link href="/politica-privacidad" className="opacity-60 transition-opacity hover:opacity-100 hover:underline underline-offset-2">
          Política de privacidad
        </Link>
        <Link href="/terminos-condiciones" className="opacity-60 transition-opacity hover:opacity-100 hover:underline underline-offset-2">
          Términos y condiciones
        </Link>
      </div>

      <p className="mt-6 opacity-60">Hecho con cariño en Córdoba · © {new Date().getFullYear()}</p>
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
