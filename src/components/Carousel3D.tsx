"use client";

import { useState, type ReactNode, type CSSProperties } from "react";

export interface Carousel3DSlide {
  id: string | number;
  content: ReactNode;
}

interface Props {
  slides: Carousel3DSlide[];
  slideWidth?: number;
  slideHeight?: number;
  spacingFactor?: number;
}

export default function Carousel3D({
  slides,
  slideWidth = 280,
  slideHeight = 380,
  spacingFactor = 0.55,
}: Props) {
  const [active, setActive] = useState(0);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const total = slides.length;

  const goPrev = () => setActive((a) => (a - 1 + total) % total);
  const goNext = () => setActive((a) => (a + 1) % total);

  function styleFor(idx: number): CSSProperties {
    let offset = idx - active;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const distance = Math.abs(offset);
    const isCenter = distance === 0;
    const isVisible = distance <= 2;

    const baseScale = isCenter ? 1 : distance === 1 ? 0.82 : 0.62;
    const hoverBoost = hoverIdx === idx ? 0.05 : 0;
    const scale = baseScale + hoverBoost;

    const translateX = offset * slideWidth * spacingFactor;
    const opacity = isCenter ? 1 : distance === 1 ? 0.5 : 0.18;
    const zIndex = 100 - distance;

    return {
      position: "absolute",
      left: "50%",
      top: 0,
      width: `${slideWidth}px`,
      height: `${slideHeight}px`,
      marginLeft: `-${slideWidth / 2}px`,
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity: isVisible ? opacity : 0,
      zIndex,
      transition: "transform 400ms ease, opacity 400ms ease",
      cursor: isCenter ? "default" : "pointer",
      pointerEvents: isVisible ? "auto" : "none",
    };
  }

  return (
    <div className="select-none">
      <div
        className="relative mx-auto"
        style={{ height: `${slideHeight}px`, maxWidth: "100%" }}
        onWheel={(e) => {
          if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.preventDefault();
            if (e.deltaX > 10) goNext();
            else if (e.deltaX < -10) goPrev();
          }
        }}
      >
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            style={styleFor(idx)}
            onClick={() => setActive(idx)}
            onMouseEnter={() => setHoverIdx(idx)}
            onMouseLeave={() => setHoverIdx(null)}
          >
            {slide.content}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={goPrev}
          aria-label="Anterior"
          className="flex h-10 w-10 items-center justify-center text-2xl transition active:scale-90"
          style={{
            backgroundColor: "rgba(92,10,20,0.08)",
            color: "#5C0A14",
            borderRadius: "999px",
          }}
        >
          ‹
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className="h-2 transition-all"
              style={{
                width: i === active ? "24px" : "8px",
                backgroundColor: i === active ? "#5C0A14" : "rgba(92,10,20,0.25)",
                borderRadius: "999px",
              }}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          aria-label="Siguiente"
          className="flex h-10 w-10 items-center justify-center text-2xl transition active:scale-90"
          style={{
            backgroundColor: "rgba(92,10,20,0.08)",
            color: "#5C0A14",
            borderRadius: "999px",
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
}
