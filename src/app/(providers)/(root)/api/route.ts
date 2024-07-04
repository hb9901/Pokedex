import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const DATA_NUM_PER_PAGE = 12;
  const TOTAL_POKEMON = Number(request.nextUrl.searchParams.get("cursor"));
  console.log(TOTAL_POKEMON);
  try {
    const allPokemonPromises = Array.from(
      { length: DATA_NUM_PER_PAGE },
      (_, index) => {
        const id = TOTAL_POKEMON - DATA_NUM_PER_PAGE + index + 1;
        return Promise.all([
          axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
          axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
        ]);
      }
    );

    const allPokemonResponses = await Promise.all(allPokemonPromises);

    const allPokemonData = allPokemonResponses.map(
      ([response, speciesResponse], index) => {
        const koreanName = speciesResponse.data.names.find(
          (name: any) => name.language.name === "ko"
        );
        return { ...response.data, korean_name: koreanName?.name || null };
      }
    );

    return NextResponse.json(allPokemonData);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
};
