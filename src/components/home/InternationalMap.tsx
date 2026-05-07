import Image from "next/image";

const COUNTRIES = ["Inglaterra", "Francia", "España", "Italia", "Alemania", "Polonia"];

export default function InternationalMap() {
  return (
    <div className="w-full">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src="/assets/mapa-europa-recorrido.png"
          alt="Mapa de Europa con los seis países donde nos formamos: Inglaterra, Francia, España, Italia, Alemania y Polonia"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <p
        className="mt-6 text-center text-sm font-semibold uppercase tracking-widest"
        style={{ color: "#5C0A14", letterSpacing: "0.15em" }}
      >
        {COUNTRIES.join(" · ")}
      </p>
    </div>
  );
}
