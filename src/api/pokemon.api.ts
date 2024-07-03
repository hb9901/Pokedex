import { TPokemon } from "@/schemas/pokemon.type";
import { AxiosInstance } from "axios";

class PokemonAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getPokemonList({ pageParam = 6 }) {
    const path = `/api?cursor=${pageParam}`;
    const response = await this.axios.get<Promise<TPokemon[]>>(path);
    const pokemonsData = await response.data;

    return pokemonsData;
  }

  async getPokemon(id: string) {
    const path = `/pokemons/${id}/api`;
    const response = await this.axios.get<Promise<TPokemon>>(path);
    const pokemonData = response.data;

    return pokemonData;
  }
}

export default PokemonAPI;
