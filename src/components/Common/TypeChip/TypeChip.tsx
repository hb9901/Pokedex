import { VariantProps, cva } from "class-variance-authority";

const typeChipVariants = cva(
  "text-sm font-bold text-white border rounded-md px-4",
  {
    variants: {
      intent: {
        dark: "bg-[#775544]",
        fire: "bg-orange-600",
        grass: "bg-green-600",
        electric: "bg-[#ffce6b]",
        water: "bg-blue-600",
        ground: "bg-yellow-800",
        rock: "bg-[#ca8a04]",
        fairy: "bg-[#FAA2C1]",
        poison: "bg-[#BE4BDB]",
        bug: "bg-[#65a30d]",
        dragon: "bg-[#7e22ce]",
        psychic: "bg-[#e879f9]",
        flying: "bg-cyan-400",
        fighting: "bg-[#dc2626]",
        normal: "bg-[#a3a3a3]",
        steel: "bg-[#94a3b8]",
        ice: "bg-[#22d3ee]",
        ghost: "bg-[#581c87]",
      },
    },
  }
);

type TypeChipVariantsType = VariantProps<typeof typeChipVariants>;

type TypeChipProps = {
  label: string;
} & TypeChipVariantsType;

function TypeChip({ label, intent }: TypeChipProps) {
  return <div className={typeChipVariants({ intent })}>{label}</div>;
}

export default TypeChip;
