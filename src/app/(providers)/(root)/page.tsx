"use client";

import PokemonList from "@/app/(providers)/(root)/_components/PokemonList";
import Loading from "@/components/Loading";
import usePokemon from "@/hooks/usePokemons";
import { useCallback, useEffect, useRef } from "react";

export default function HomePage() {
  const { pokemons, isFetching, error, hasNextPage, fetchNextPage } =
    usePokemon();
  const loadMoreRef = useRef(null);

  const onIntersect = useCallback(
    async (
      [entry]: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        await fetchNextPage();
        observer.observe(entry.target);
      }
    },
    [fetchNextPage]
  );

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(onIntersect, option);

    loadMoreRef.current && observer.observe(loadMoreRef.current);

    return () => observer && observer.disconnect();
  }, [onIntersect, hasNextPage, isFetching]);

  return (
    <main className="flex flex-col items-center max-w-[1800px] mt-8 m-auto gap-y-6">
      {error ? (
        <div>{error.message}</div>
      ) : (
        <h1 className="text-xl font-bold">포켓몬 도감</h1>
      )}
      {pokemons && <PokemonList pokemons={pokemons} />}
      {!error && isFetching && <Loading />}

      {hasNextPage && !isFetching && (
        <div ref={loadMoreRef} className="h-10"></div>
      )}
    </main>
  );
}
