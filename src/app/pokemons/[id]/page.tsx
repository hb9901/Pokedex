import PokemonDetail from "@/components/PokemonDetail";
import { TPokemon } from "@/schemas/pokemon.type";
import axios from "axios";

interface DetailPageProps {
  params: {
    id: string;
  };
}

async function DetailPage({ params }: DetailPageProps) {
  async function getPokemon(id: string) {
    const response = await axios.get<Promise<TPokemon>>(
      `http://localhost:3000/pokemons/${id}/api`
    );
    const data = response.data;

    return data;
  }

  const pokemonData = await getPokemon(params.id);

  return (
    <div className="flex flex-col items-center max-w-[1800px] m-auto">
      <PokemonDetail pokemonData={pokemonData} />
    </div>
  );
}

export default DetailPage;
