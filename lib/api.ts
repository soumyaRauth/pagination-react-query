import { PaginationProps, PokemonProps } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchPokemonList = async ({
  limit = 10,
  offset = 0,
}: PaginationProps): Promise<PokemonProps> => {
  const response = await fetch(`${API_URL}?offset=${offset}&limit=${limit}`);
  const data: PokemonProps = await response.json();
  return data;
};
