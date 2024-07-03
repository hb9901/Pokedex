"use client";

import Loading from "@/components/Loading";
import PokemonList from "@/components/PokemonList";
import usePokemon from "@/hooks/usePokemon";
import { useState } from "react";

export default function HomePage() {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  // const [pokemons, setPokemons] = useState<TPokemon[] | null>(null);

  const { pokemons, isLoading } = usePokemon();

  return (
    <main className="flex flex-col items-center max-w-[1800px] mt-8 m-auto gap-y-6">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-xl font-bold">포켓몬 도감</h1>
          <PokemonList pokemons={pokemons} />
        </>
      )}
    </main>
  );
}
