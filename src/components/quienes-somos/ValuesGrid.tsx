"use client";

import { useState } from "react";
import {
  HeartIcon,
  SparkleIcon,
  CertificateIcon,
  LeafIcon,
  ChefHatIcon,
  GearIcon,
  StarsIcon,
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
    Icon: StarsIcon,
    name: "Imagen",
    text: "Cuidamos cada aspecto de nuestra imagen como reflejo de nuestra filosofía. Desde la presentación hasta la manera en que nos comunicamos, proyectamos confianza.",
  },
];

const N = VALUES.length;
const ORBIT_DURATION = 90; // seconds — slow

export default function ValuesGrid() {
  const [active, setActive] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="relative mx-auto"
      style={{ width: "min(600px, 95vw)", aspectRatio: "1" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setActive(null);
      }}
    >
      {/* Center: title or active value description */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center" style={{ maxWidth: "300px" }}>
          {active !== null ? (
            <div key={active} className="values-fade-in">
              <p
                className="mb-2 text-xs font-bold uppercase tracking-widest"
                style={{ color: "#C9A227" }}
              >
                {VALUES[active].name}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#1a0a0c" }}>
                {VALUES[active].text}
              </p>
            </div>
          ) : (
            <h3
              className="text-2xl font-bold uppercase tracking-wide md:text-3xl"
              style={{ color: "#5C0A14" }}
            >
              Nuestros<br />valores
            </h3>
          )}
        </div>
      </div>

      {/* Orbiting circles */}
      {VALUES.map((value, idx) => {
        const delay = -(idx * ORBIT_DURATION) / N;
        const isActive = active === idx;
        return (
          <div
            key={value.name}
            className="orbit-spoke"
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              animationName: "orbit-cw",
              animationDuration: `${ORBIT_DURATION}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDelay: `${delay}s`,
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {/* Wrapper de posición — estático, ubica el botón en el radio de la órbita */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "20%",
                height: "20%",
                marginTop: "-10%",
                marginLeft: "-10%",
                transform: "translateY(-200%)",
              }}
            >
              {/* Botón — contra-rota para mantener el texto vertical */}
              <button
                type="button"
                onMouseEnter={() => setActive(idx)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(idx)}
                onBlur={() => setActive(null)}
                className="flex h-full w-full flex-col items-center justify-center rounded-full transition-colors duration-300"
                style={{
                  pointerEvents: "auto",
                  animationName: "spin-ccw",
                  animationDuration: `${ORBIT_DURATION}s`,
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  animationDelay: `${delay}s`,
                  animationPlayState: paused ? "paused" : "running",
                  backgroundColor: isActive ? "#5C0A14" : "#faf6ee",
                  border: `2px solid ${isActive ? "#C9A227" : "#e8dcc8"}`,
                  boxShadow: isActive
                    ? "0 12px 32px rgba(60,4,14,0.3)"
                    : "0 2px 8px rgba(60,4,14,0.08)",
                  cursor: "pointer",
                  zIndex: isActive ? 2 : 1,
                }}
                aria-label={value.name}
              >
                <value.Icon
                  className="h-6 w-6 md:h-7 md:w-7"
                  style={{ color: isActive ? "#C9A227" : "#5C0A14" }}
                />
                <span
                  className="mt-1 px-1 text-[9px] font-bold uppercase leading-tight tracking-wide md:text-[10px]"
                  style={{ color: isActive ? "#fff" : "#5C0A14" }}
                >
                  {value.name}
                </span>
              </button>
            </div>
          </div>
        );
      })}

      <style jsx>{`
        @keyframes orbit-cw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-ccw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        @keyframes values-fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .values-fade-in {
          animation: values-fade-in 0.25s ease-out forwards;
        }
        .orbit-spoke {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
