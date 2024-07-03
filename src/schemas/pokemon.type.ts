import { TypeChipVariantsType } from "@/components/Common/TypeChip/TypeChip";

export type TPokemon = {
  id: number;
  name: string;
  korean_name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      korean_name: string;
    } & TypeChipVariantsType
  }[];
  abilities: { ability: { name: string; korean_name: string } }[];
  moves: { move: { name: string; korean_name: string } }[];
};

export type TMove = {
  move: { name: string; korean_name: string };
};
