import { TPokemon } from "@/schemas/pokemon.type";
import Image from "next/image";
import { makeIndexStr } from "./function";

interface PokemonListCardProps {
  pokemon: TPokemon;
}

function PokemonListCard({ pokemon }: PokemonListCardProps) {
  const pokemonId = makeIndexStr(String(pokemon.id));
  return (
    <div className="flex flex-col items-center justify-center border border-slate-500 rounded-md p-3">
      <div className="relative w-40 aspect-square">
        <Image
          alt={pokemon.korean_name}
          src={pokemon.sprites.front_default}
          fill
          className="object-cover"
        />
      </div>
      <span className="text-slate-400 text-sm">No.{pokemonId}</span>
      <h5 className="font-bold text-lg">{pokemon.korean_name}</h5>
    </div>
  );
}

export default PokemonListCard;
