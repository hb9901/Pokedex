import { TPokemon } from "@/schemas/pokemon.type";
import axios from "axios";

export const getPokemonList = async () => {
  const response = await axios.get<Promise<TPokemon[]>>("/api");
  const pokemonsData = await response.data;
  
  return pokemonsData;
};
