import { TPokemon } from "@/schemas/pokemon.type";
import { makeIndexStr } from "@/utils/function";
import axios from "axios";
import Image from "next/image";

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
  const pokemonId = makeIndexStr(String(pokemonData.id));

  console.log(pokemonData);
  return (
    <div className="flex flex-col items-center max-w-[1800px] m-auto">
      <header></header>
      <main className="flex flex-col">
        <div className="flex flex-row">
          <div className="relative aspect-square w-[200px]">
            <Image
              alt={pokemonData.korean_name}
              src={pokemonData.sprites.front_default}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div>
              <span className="text-slate-400 text-sm">No.{pokemonId}</span>
              <h5 className="font-bold text-lg">{pokemonData.korean_name}</h5>
            </div>
            <div className="flex flex-row">
              <span>타입:</span>
              <ul>
                {pokemonData.types.map((type, index) => (
                  <li key={index}>{type.type.korean_name}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-row">
              <span>특성:</span>
              <ul>
                {pokemonData.abilities.map((ability, index) => (
                  <li key={index}>{ability.ability.korean_name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <ul>
            {pokemonData.moves.map((move, index) => (
              <li key={index}>{move.move.korean_name}</li>
            ))}
          </ul>
        </div>
        <div></div>
      </main>
    </div>
  );
}

export default DetailPage;
