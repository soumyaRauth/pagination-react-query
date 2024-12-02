export type SinglePokemonProp = {
  name: string;
  url: string;
};
export type PokemonProps = {
  count: number;
  results: SinglePokemonProp[];
};

export type PaginationProps = {
  pageNumber: number;
  limit?: number;
  offset?: number;
  setPageNumber?: number;
  totalPages?: number;
  onPageChange?: (pageNumber: number) => void;
};
