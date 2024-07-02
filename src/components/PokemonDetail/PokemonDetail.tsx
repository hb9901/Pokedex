import { TPokemon } from "@/schemas/pokemon.type";
import { makeIndexStr } from "@/utils/function";
import Image from "next/image";
import Link from "next/link";
import AbilityChip from "../Common/AbilityChip";
import TypeChip from "../Common/TypeChip";
import DetailForm from "./DetailForm";
import MovesBtn from "./MovesBtn";

interface PokemonDetailProps {
  pokemonData: TPokemon;
}

function PokemonDetail({ pokemonData }: PokemonDetailProps) {
  const pokemonId = makeIndexStr(String(pokemonData.id));

  return (
    <div className="flex flex-col items-center max-w-5xl m-auto">
      <header className="flex flex-row items-center justify-between w-full min-h-14 bg-slate-300">
        {pokemonData.id > 1 && (
          <Link href={`/pokemons/${pokemonData.id - 1}`}>
            <button className="bg-slate-500 px-5 py-1 text-white rounded-md">
              이전 포켓몬
            </button>
          </Link>
        )}
        <Link href="/">
          <span className="text-black font-bold text-xl">포켓몬 도감</span>
        </Link>
        <Link href={`/pokemons/${pokemonData.id + 1}`}>
          <button className="bg-slate-500 px-5 py-1 text-white rounded-md">
            다음 포켓몬
          </button>
        </Link>
      </header>
      <main className="w-full bg-white">
        <div className="flex flex-row">
          <div className="relative aspect-square w-1/2 m-10">
            <Image
              alt={pokemonData.korean_name}
              src={pokemonData.sprites.other["official-artwork"].front_default}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-y-8 justify-center w-1/2 m-10">
            <div className="mb-5">
              <span className="text-slate-400 text-md">No.{pokemonId}</span>
              <h5 className="font-bold text-4xl">{pokemonData.korean_name}</h5>
            </div>
            <div className="flex flex-col gap-y-3">
              <DetailForm label="타입">
                <ul className="flex flex-row gap-x-1">
                  {pokemonData.types.map((type, index) => (
                    <li key={index}>
                      <TypeChip
                        label={type.type.korean_name}
                        intent={type.type.name}
                      />
                    </li>
                  ))}
                </ul>
              </DetailForm>
              <DetailForm label="특성">
                <ul className="flex flex-row gap-x-1">
                  {pokemonData.abilities.map((ability, index) => (
                    <li key={index}>
                      <AbilityChip label={ability.ability.korean_name} />
                    </li>
                  ))}
                </ul>
              </DetailForm>
            </div>
            <MovesBtn moves={pokemonData.moves} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default PokemonDetail;
