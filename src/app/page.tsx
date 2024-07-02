"use client";

import Loading from "@/components/Loading";
import PokemonList from "@/components/PokemonList";
import { TPokemon } from "@/schemas/pokemon.type";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<TPokemon[] | null>(null);

  useEffect(() => {
    const getPokemonList = async () => {
      const response = await axios.get<Promise<TPokemon[]>>(
        "http://localhost:3000/pokemons"
      );
      const pokemonsData = await response.data;
      setPokemons(pokemonsData);
      setIsInitialized(true);
    };
    getPokemonList();
  }, []);

  return (
    <main className="flex flex-col items-center max-w-[1800px] m-auto">
      <h1>포켓몬 도감</h1>
      {isInitialized ? <PokemonList pokemons={pokemons} /> : <Loading />}
    </main>
  );
}
