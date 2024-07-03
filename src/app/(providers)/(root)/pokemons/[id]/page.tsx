import PokemonDetail from "@/components/PokemonDetail";
import { TPokemon } from "@/schemas/pokemon.type";
import axios from "axios";
import { Metadata } from "next";

interface MetadataProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const id = params.id;
  async function getPokemon(id: string) {
    const response = await axios.get<Promise<TPokemon>>(
      `http://localhost:3000/pokemons/${id}/api`
    );
    const data = response.data;

    return data;
  }

  const pokemonData = await getPokemon(id);
  const title = pokemonData.korean_name;

  return {
    title,
  };
}

interface DetailPageProps {
  params: {
    id: string;
  };
}

async function DetailPage({ params }: DetailPageProps) {
  const id = params.id;
  async function getPokemon(id: string) {
    const response = await axios.get<Promise<TPokemon>>(
      `http://localhost:3000/pokemons/${id}/api`
    );
    const data = response.data;

    return data;
  }

  const pokemonData = await getPokemon(id);

  return <PokemonDetail pokemonData={pokemonData} />;
}

export default DetailPage;
