import api from "@/api/api";
import { useInfiniteQuery } from "@tanstack/react-query";

function usePokemons() {
  const {
    data: pokemons,
    error: isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: ({ pageParam }) => api.pokemon.getPokemonList({ pageParam }),
    initialPageParam: 12,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 12;
    },
  });

  return { pokemons, isError, isFetching, hasNextPage, fetchNextPage };
}

export default usePokemons;
