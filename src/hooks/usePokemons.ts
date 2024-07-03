import api from "@/api/api";
import { useInfiniteQuery } from "@tanstack/react-query";

function usePokemons() {
  // const {
  //   data: pokemons,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["pokemons"],
  //   queryFn: () => api.pokemon.getPokemonList({ pageParam: 0 }),
  // });

  // return { pokemons, isLoading, isError };

  const {
    data: pokemons,
    error: isError,
    fetchNextPage,
    hasNextPage,
    isFetching: isLoading,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: ({ pageParam }) => api.pokemon.getPokemonList({ pageParam }),
    initialPageParam: 6,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 6;
    },
  });

  return { pokemons, isError, isLoading, fetchNextPage };
}

export default usePokemons;
