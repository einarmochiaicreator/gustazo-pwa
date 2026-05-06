import Link from "next/link";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";

const WA_NUMBER = "5493516632462";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-xs" style={{ backgroundColor: "#5C0A14", color: "#e8d4b0" }}>
      <p className="font-semibold uppercase tracking-widest" style={{ color: "#C9A227" }}>Gustazo</p>
      <p className="mt-2 opacity-70">R.N.E.: 04006318 · Elaboración bajo BPM · Sin contaminación cruzada</p>
      <p className="mt-1 opacity-70">Hecho con cariño en Córdoba · © {new Date().getFullYear()}</p>

      <div className="mt-5 flex justify-center gap-5">
        <a
          href="https://www.instagram.com/gustazo.glutenfree"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="opacity-60 transition-opacity hover:opacity-100"
          style={{ color: "#e8d4b0" }}
        >
          <InstagramIcon className="h-5 w-5" />
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
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1">
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
    </footer>
  );
}
