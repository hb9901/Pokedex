import { getPokemonList } from "@/api/pokemon.api";
import { useQuery } from "@tanstack/react-query";

function usePokemon() {
  const { data: pokemons, isLoading, isError} = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemonList,
  });

  return { pokemons, isLoading };
}

export default usePokemon;
