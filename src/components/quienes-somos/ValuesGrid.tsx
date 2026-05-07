"use client";

import { useState } from "react";
import {
  HeartIcon,
  SparkleIcon,
  CertificateIcon,
  LeafIcon,
  ChefHatIcon,
  GearIcon,
  CameraIcon,
} from "@/components/Icons";

const VALUES = [
  {
    Icon: HeartIcon,
    name: "Empatía",
    text: "Creemos que cada persona merece ser escuchada y entendida. Conectamos con nuestros clientes poniéndonos en su lugar, comprendiendo sus desafíos y deseos.",
  },
  {
    Icon: SparkleIcon,
    name: "Pasión",
    text: "El motor que nos impulsa es la alegría de poder transformar una vida, de decirle a alguien “Ahora sí podés”, de ser parte de momentos significativos y crear experiencias que alimenten el alma.",
  },
  {
    Icon: CertificateIcon,
    name: "Responsabilidad",
    text: "Nuestra promesa es clara: garantizar seguridad, calidad y confianza en todo lo que hacemos. Cada producto lleva nuestro compromiso de cumplir con los más altos estándares.",
  },
  {
    Icon: LeafIcon,
    name: "Desarrollo personal",
    text: "Fomentamos el aprendizaje constante, la superación de creencias limitantes y miedos porque sabemos que, al crecer como individuos, crecemos como comunidad.",
  },
  {
    Icon: ChefHatIcon,
    name: "Vocación de servicio",
    text: "Nuestro propósito es dar oportunidades a quienes han sido ignorados por la sociedad. Nos comprometimos a ser una marca inclusiva y consciente, que aboga por una alimentación que no excluya a nadie.",
  },
  {
    Icon: GearIcon,
    name: "Versatilidad",
    text: "En un mundo en constante cambio, adaptamos nuestras soluciones a medida que las necesidades de las personas evolucionan, asegurando siempre poder ofrecer productos y servicios relevantes y útiles.",
  },
  {
    Icon: CameraIcon,
    name: "Imagen",
    text: "Cuidamos cada aspecto de nuestra imagen como reflejo de nuestra filosofía. Desde la presentación hasta la manera en que nos comunicamos, proyectamos confianza.",
  },
];

export default function ValuesGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {VALUES.map((value, idx) => {
        const isOpen = openIndex === idx;
        return (
          <button
            key={value.name}
            onClick={() => setOpenIndex(isOpen ? null : idx)}
            onMouseEnter={() => setOpenIndex(idx)}
            onMouseLeave={() => setOpenIndex(null)}
            className="group relative overflow-hidden p-6 text-left transition"
            style={{
              backgroundColor: isOpen ? "#5C0A14" : "#faf6ee",
              minHeight: "180px",
              borderRadius: "3px",
            }}
            aria-expanded={isOpen}
          >
            <div
              className="transition-opacity duration-300"
              style={{ opacity: isOpen ? 0 : 1 }}
            >
              <value.Icon
                className="mb-4 h-10 w-10"
                style={{ color: "#5C0A14" }}
              />
              <h3
                className="text-lg font-semibold uppercase tracking-wide"
                style={{ color: "#5C0A14" }}
              >
                {value.name}
              </h3>
            </div>

            <div
              className="absolute inset-0 flex flex-col justify-center px-6 py-5 transition-opacity duration-300"
              style={{
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? "auto" : "none",
                color: "#fff",
              }}
            >
              <h3
                className="mb-3 text-base font-semibold uppercase tracking-wide"
                style={{ color: "#C9A227" }}
              >
                {value.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.92)" }}>
                {value.text}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
