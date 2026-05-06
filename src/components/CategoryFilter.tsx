"use client";

import { CATEGORIES, type Category } from "@/lib/products";
import { SparkleIcon, BreadIcon, CakeIcon, PastaIcon } from "@/components/Icons";

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  panaderia: BreadIcon,
  dulces: CakeIcon,
  pastas: PastaIcon,
};

interface Props {
  active: Category | "all";
  onChange: (cat: Category | "all") => void;
}

export default function CategoryFilter({ active, onChange }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      <FilterChip
        label="Todo"
        Icon={SparkleIcon}
        active={active === "all"}
        onClick={() => onChange("all")}
      />
      {CATEGORIES.map((cat) => (
        <FilterChip
          key={cat.id}
          label={cat.label}
          Icon={CATEGORY_ICONS[cat.id]}
          active={active === cat.id}
          onClick={() => onChange(cat.id)}
        />
      ))}
    </div>
  );
}

function FilterChip({
  label,
  Icon,
  active,
  onClick,
}: {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition active:scale-95"
      style={
        active
          ? { backgroundColor: "#5C0A14", color: "#C9A227" }
          : { backgroundColor: "#f0e8d6", color: "#5C0A14" }
      }
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );
}
