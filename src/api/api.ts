import axios, { AxiosInstance } from "axios";
import PokemonAPI from "./pokemon.api";

const BASE_URL = "http://localhost:3000";

class API {
  private axios: AxiosInstance;
  pokemon;

  constructor() {
    this.axios = axios.create({ baseURL: BASE_URL });

    this.pokemon = new PokemonAPI(this.axios);
  }
}

const api = new API();
export default api;