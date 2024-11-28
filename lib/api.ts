import { PaginationProp } from "./types";

const API_ROOT = process.env.apiurl;

if (!API_ROOT) {
  throw new Error("API URL is not defined");
}

export const fetchPokemonData = async ({ offset, limit }: PaginationProp) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  return data;
};
