"use client";

import { TPokemon } from "@/schemas/pokemon.type";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import PokemonListCard from "../PokemonListCard";

function PokemonList() {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-3 gap-y-8">
      {isInitialized ? (
        pokemons &&
        pokemons.map((pokemon) => (
          <PokemonListCard key={pokemon.id} pokemon={pokemon} />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default PokemonList;
