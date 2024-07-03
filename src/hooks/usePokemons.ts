import api from "@/api/api";
import { useQuery } from "@tanstack/react-query";

function usePokemons() {
  const { data: pokemons, isLoading, isError} = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => api.pokemon.getPokemonList(),
  });

  return { pokemons, isLoading, isError };
}

export default usePokemons;
