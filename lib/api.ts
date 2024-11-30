import { PaginationProps } from "./types";

const API_URL = process.env.apiurl;

export const fetchPokemonList = async ({
  limit = 10,
  offset = 0,
}: PaginationProps) => {
  const response = await fetch(`${API_URL}?offset=${offset}&limit=${limit}`);
  const data = await response.json();
  return data;
};
