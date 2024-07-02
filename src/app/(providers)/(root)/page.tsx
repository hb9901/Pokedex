"use client";

import Loading from "@/components/Loading";
import PokemonList from "@/components/PokemonList";
import { TPokemon } from "@/schemas/pokemon.type";
import axios from "axios";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<TPokemon[] | null>(null);

  useEffect(() => {
    const getPokemonList = async () => {
      const response = await axios.get<Promise<TPokemon[]>>(
        "/api"
      );
      const pokemonsData = await response.data;
      setPokemons(pokemonsData);
      setIsInitialized(true);
    };
    getPokemonList();
  }, []);

  return (
    <main className="flex flex-col items-center max-w-[1800px] m-auto gap-y-6">
      {isInitialized ? (
        <>
          <h1 className="text-lg font-bold">포켓몬 도감</h1>
          <PokemonList pokemons={pokemons} />
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
}
