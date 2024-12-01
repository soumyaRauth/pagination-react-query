import Header from "@/components/project/Header.tsx/Header";
import PokemonList from "@/components/project/Posts/PokemonList";
import Posts from "@/components/project/Posts/PokemonList";
import { fetchPokemonList } from "@/lib/api";
import { PokemonProps } from "@/lib/types";
import { WithGetStaticProps } from "@/lib/utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { count } from "console";
import { InferGetStaticPropsType } from "next";
import { useState } from "react";

const HomePage = ({
  pokemons,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["pokemons", pageNumber],
    queryFn: () => fetchPokemonList({ limit: 10, offset: pageNumber - 1 }),
    placeholderData: keepPreviousData,
  });

  return (
    <>
      <Header title="my blog" caseName="title" recentButton={false} />
      <p className="container flex justify-center mt-10">
        Total Contents:{pokemons.count}
      </p>

      {error && <p>HELLO KITTY!!!</p>}
      <PokemonList count={0} results={data ? data.results : pokemons.results} />
      <button
        className="p-2 bg-gray-500 text-white rounded hover:bg-yellow-600"
        onClick={() => setPageNumber(pageNumber - 1)}
      >
        Previous
      </button>
      <button
        className="p-2 bg-green-500 text-white rounded hover:bg-yellow-600"
        onClick={() => setPageNumber(pageNumber)}
      >
        This
      </button>
      <button
        className="p-2 bg-blue-500 text-white rounded hover:bg-yellow-600"
        onClick={() => setPageNumber(pageNumber + 1)}
      >
        Next
      </button>

      {isFetching ? <>FETCHING</> : ""}
    </>
  );
};

export default HomePage;

export const getStaticProps = WithGetStaticProps(
  fetchPokemonList,
  "pokemons",
  40,
  10,
  0
);
