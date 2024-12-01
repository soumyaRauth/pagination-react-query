import { PaginationProps, PokemonProps } from "./types";

const API_URL = process.env.apiurl;

export const fetchPokemonList = async ({
  limit = 10,
  offset = 0,
}: PaginationProps): Promise<PokemonProps> => {
  const response = await fetch(`${API_URL}?offset=${offset}&limit=${limit}`);
  const data: PokemonProps = await response.json();
  return data;
};
