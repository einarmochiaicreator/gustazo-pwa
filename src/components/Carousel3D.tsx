"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

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

const SWIPE_THRESHOLD_PX = 50;

export default function Carousel3D({
  slides,
  slideWidth = 280,
  slideHeight = 380,
  spacingFactor = 0.55,
}: Props) {
  const [active, setActive] = useState(0);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchMoved = useRef(false);
  const total = slides.length;

  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Escalar el slide para que entre cómodo en pantallas chicas (con margen para los hermanos).
  const scaleToFit = viewportWidth && viewportWidth < slideWidth + 80
    ? (viewportWidth - 32) / slideWidth
    : 1;
  const effectiveWidth = slideWidth * scaleToFit;
  const effectiveHeight = slideHeight * scaleToFit;

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

    const translateX = offset * effectiveWidth * spacingFactor;
    const opacity = isCenter ? 1 : distance === 1 ? 0.5 : 0.18;
    const zIndex = 3 - distance;

    return {
      position: "absolute",
      left: "50%",
      top: 0,
      width: `${effectiveWidth}px`,
      height: `${effectiveHeight}px`,
      marginLeft: `-${effectiveWidth / 2}px`,
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
        className="relative mx-auto touch-pan-y"
        style={{ height: `${effectiveHeight}px`, maxWidth: "100%" }}
        onWheel={(e) => {
          if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.preventDefault();
            if (e.deltaX > 10) goNext();
            else if (e.deltaX < -10) goPrev();
          }
        }}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
          touchStartY.current = e.touches[0].clientY;
          touchMoved.current = false;
        }}
        onTouchMove={(e) => {
          if (touchStartX.current === null || touchStartY.current === null) return;
          const dx = e.touches[0].clientX - touchStartX.current;
          const dy = e.touches[0].clientY - touchStartY.current;
          // Si el movimiento es claramente horizontal, prevenir scroll vertical
          if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
            touchMoved.current = true;
            e.preventDefault();
          }
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > SWIPE_THRESHOLD_PX) {
            if (dx < 0) goNext();
            else goPrev();
          }
          touchStartX.current = null;
          touchStartY.current = null;
        }}
      >
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            style={styleFor(idx)}
            onClick={() => {
              if (touchMoved.current) return;
              setActive(idx);
            }}
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
