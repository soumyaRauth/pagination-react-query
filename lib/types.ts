export type SinglePokemonProp = {
  name: string;
  url: string;
};
export type PokemonProps = {
  count: number;
  results: SinglePokemonProp[];
};

export type PaginationProps = {
  limit?: number;
  offset?: number;
};
