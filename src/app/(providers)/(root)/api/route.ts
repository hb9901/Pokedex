import { TPokemon } from "@/schemas/pokemon.type";
import axios, { AxiosResponse } from "axios";
import { NextRequest, NextResponse } from "next/server";

type TPokemonRouteType = TPokemon & {
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
};

const MAX_POKEMON = 151;

export const GET = async (request: NextRequest) => {
  const DATA_NUM_PER_PAGE = 12;
  const TOTAL_POKEMON = Number(request.nextUrl.searchParams.get("cursor"));
  // const isNotNull = <T>(value: T | null): value is T => value !== null;

  try {
    const allPokemonPromises = Array.from(
      { length: DATA_NUM_PER_PAGE },
      (_, index) => {
        const id = TOTAL_POKEMON - DATA_NUM_PER_PAGE + index + 1;
        if (id > MAX_POKEMON) return null;
        return Promise.all([
          axios.get<TPokemonRouteType>(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          ),
          axios.get<TPokemonRouteType>(
            `https://pokeapi.co/api/v2/pokemon-species/${id}`
          ),
        ]);
      }
    ).filter(Boolean) as Promise<
      [AxiosResponse<TPokemonRouteType>, AxiosResponse<TPokemonRouteType>]
    >[]; // filter(Boolean)은 null 값을 거르지 못함
    //.filter(isNotNull)

    const allPokemonResponses = await Promise.all(allPokemonPromises);

    const allPokemonData = allPokemonResponses
      .map(([response, speciesResponse], index) => {
        const koreanName = speciesResponse.data.names.find(
          (name: any) => name.language.name === "ko"
        );
        return { ...response.data, korean_name: koreanName?.name || null };
      })
      .filter(Boolean);

    return NextResponse.json(allPokemonData);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
};
