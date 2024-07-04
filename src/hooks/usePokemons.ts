import api from "@/api/api";
import { useInfiniteQuery } from "@tanstack/react-query";

function usePokemons() {
  const {
    data: pokemons,
    error,
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
    select: ({ pages }) => pages.flat(),
  });

  return { pokemons, error, isFetching, hasNextPage, fetchNextPage };
}

export default usePokemons;
