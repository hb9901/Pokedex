import { TPokemon } from "@/schemas/pokemon.type";
import Image from "next/image";
import Link from "next/link";
import { makeIndexStr } from "../../utils/function";

interface PokemonListCardProps {
  pokemon: TPokemon;
}

function PokemonListCard({ pokemon }: PokemonListCardProps) {
  const pokemonId = makeIndexStr(String(pokemon.id));
  return (
    <Link href={`/pokemons/${pokemon.id}`}>
      <div
        className="flex flex-col items-center justify-center border 
      border-slate-500 rounded-md px-10 py-6 hover:shadow-xl bg-white
        hover:-translate-y-1 transition duration-200 cursor-pointer"
      >
        <div className="relative w-full aspect-square">
          <Image
            alt={pokemon.korean_name}
            src={pokemon.sprites.other['official-artwork'].front_default}
            fill
            className="object-cover"
            sizes="w-full"
          />
        </div>
        <span className="text-slate-400 text-sm">No.{pokemonId}</span>
        <h5 className="font-bold text-lg">{pokemon.korean_name}</h5>
      </div>
    </Link>
  );
}

export default PokemonListCard;
