// {
//     "count": 1302,
//     "next": "https://pokeapi.co/api/v2/pokemon?offset=6&limit=5",
//     "previous": "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1",
//     "results": [
//       {
//         "name": "ivysaur",
//         "url": "https://pokeapi.co/api/v2/pokemon/2/"
//       }
//     ]
//   }

export type SinglePokemonProp = {
  name: string;
  url: string;
};

export type PokemonListProps = {
  count: number;
  next?: string;
  previous?: string;
  results: SinglePokemonProp[];
};

export type PaginationProp = {
  offset: number;
  limit: number;
};
