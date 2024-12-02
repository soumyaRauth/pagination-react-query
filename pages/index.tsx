import Header from "@/components/project/Header.tsx/Header";
import PaginationComponent from "@/components/project/Pagination/Pagination";
import PokemonList from "@/components/project/Posts/PokemonList";
import { fetchPokemonList } from "@/lib/api";
import { WithGetStaticProps } from "@/lib/utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { InferGetStaticPropsType } from "next";
import { useState } from "react";

const NUMBER_OF_PAGS = 10 as const;
const HomePage = ({
  pokemons,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["pokemons", pageNumber],
    queryFn: () =>
      fetchPokemonList({
        limit: NUMBER_OF_PAGS,
        offset: pageNumber - 1,
        pageNumber: pageNumber,
      }),
    placeholderData: keepPreviousData,
  });

  const handlePageChange = (newPage: number) => {
    setPageNumber(newPage);
  };

  return (
    <>
      <Header title="my blog" caseName="title" recentButton={false} />
      <p className="container flex justify-center mt-10">
        Total Pages:{pokemons.count}
      </p>
      <p className="container flex justify-center mt-10">
        current page: {pageNumber}
      </p>

      {/* {error && <p>HELLO KITTY!!!</p>} */}
      <PokemonList count={0} results={data ? data.results : pokemons.results} />
      {/* Pagination Component */}
      <PaginationComponent
        pageNumber={pageNumber}
        onPageChange={handlePageChange} // Pass handler to the child component
        totalPages={Math.ceil(pokemons.count / NUMBER_OF_PAGS)}
      />
      {isFetching ? <>FETCHING</> : ""}
    </>
  );
};

export default HomePage;

export const getStaticProps = WithGetStaticProps(
  fetchPokemonList,
  "pokemons",
  60,
  NUMBER_OF_PAGS,
  0
);
