import { PaginationProp, Pokemon } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchPokemonList = async ({
  limit = 10,
  offset = 0,
}: PaginationProp.PaginationPropsOptional): Promise<Pokemon.Multiple> => {
  const response = await fetch(`${API_URL}?offset=${offset}&limit=${limit}`);
  const data: Pokemon.Multiple = await response.json();
  return data;
};
