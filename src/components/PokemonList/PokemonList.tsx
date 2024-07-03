import { TPokemon } from "@/schemas/pokemon.type";
import PokemonListCard from "../PokemonListCard";

interface PokemonListProps {
  pokemons: TPokemon[] | undefined;
}

function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-3 gap-y-8">
      {pokemons &&
        pokemons.map((pokemon) => (
          <PokemonListCard key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  );
}

export default PokemonList;
