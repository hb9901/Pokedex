
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
      name: TPokemonTypeName;
      korean_name: string;
    };
  }[];
  abilities: { ability: { name: string; korean_name: string } }[];
  moves: { move: { name: string; korean_name: string } }[];
};

export type TMove = {
  move: { name: string; korean_name: string };
};

export type TPokemonTypeName = "dark" | "fire" | "grass" | "electric" | "water" | "ground" | "rock" | "fairy" | "poison" | "bug" | "dragon" | "psychic" | "flying" | "fighting" | "normal" | "steel" | "ice" | "ghost" ;