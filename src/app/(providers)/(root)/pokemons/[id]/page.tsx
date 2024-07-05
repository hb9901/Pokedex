import api from "@/api/api";
import PokemonDetail from "@/app/(providers)/(root)/pokemons/[id]/_components/PokemonDetail";
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
  const pokemonData = await api.pokemon.getPokemon(id);
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
  const pokemonData = await api.pokemon.getPokemon(id);

  return <PokemonDetail pokemonData={pokemonData} />;
}

export default DetailPage;
