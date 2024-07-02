import { TPokemon } from "@/schemas/pokemon.type";
import { makeIndexStr } from "@/utils/function";
import Image from "next/image";
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
    <div className="flex flex-col items-center max-w-4xl m-auto bg-white">
      <header></header>
      <main className="flex flex-col">
        <div className="flex flex-row gap-x-3">
          <div className="relative aspect-square w-[300px]">
            <Image
              alt={pokemonData.korean_name}
              src={pokemonData.sprites.other["official-artwork"].front_default}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div>
              <span className="text-slate-400 text-sm">No.{pokemonId}</span>
              <h5 className="font-bold text-lg">{pokemonData.korean_name}</h5>
            </div>
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
            <DetailForm label="기술"><MovesBtn moves={pokemonData.moves}/></DetailForm>
          </div>
        </div>
        <div></div>
      </main>
    </div>
  );
}

export default PokemonDetail;
