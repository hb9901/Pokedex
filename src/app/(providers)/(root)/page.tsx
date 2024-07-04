"use client";

import Loading from "@/components/Loading";
import PokemonList from "@/components/PokemonList";
import usePokemon from "@/hooks/usePokemons";
import { useCallback, useEffect, useRef } from "react";

export default function HomePage() {
  const { pokemons, isFetching, isError, hasNextPage, fetchNextPage } =
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
      <h1 className="text-xl font-bold" onClick={() => fetchNextPage()}>
        포켓몬 도감
      </h1>
      {pokemons &&
        pokemons.pages.map((page, index) => (
          <PokemonList key={index} pokemons={page} />
        ))}
      {isFetching && <Loading />}

      {hasNextPage && !isFetching && <div ref={loadMoreRef}>Loading...</div>}
    </main>
  );
}
