"use client";

import Loading from "@/components/Loading";
import PokemonList from "@/components/PokemonList";
import usePokemon from "@/hooks/usePokemons";

export default function HomePage() {
  const { pokemons, isLoading, isError, fetchNextPage } = usePokemon();
  console.log(pokemons?.pages);
  return (
    <main className="flex flex-col items-center max-w-[1800px] mt-8 m-auto gap-y-6">
      <h1 className="text-xl font-bold" onClick={() => fetchNextPage()}>
        포켓몬 도감
      </h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {pokemons &&
            pokemons.pages.map((page, index) => (
              <PokemonList key={index} pokemons={page} />
            ))}
        </>
      )}
    </main>
  );
}
