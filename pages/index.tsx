import Header from "@/components/project/Header.tsx/Header";
import PaginationComponent from "@/components/project/Pagination/Pagination";
import PokemonList from "@/components/project/Posts/PokemonList";
import { fetchPokemonList } from "@/lib/api";
import { WithGetStaticProps } from "@/lib/utils";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { InferGetStaticPropsType } from "next";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NUMBER_OF_PAGES: Readonly<number> = 1302;

const Spinner = () => (
  <div
    style={{
      position: "fixed", // Fixed to stay in place
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white background
      zIndex: "9999", // Make sure the spinner is on top of everything else
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      Loading...
    </div>
  </div>
);

const HomePage = ({
  pokemons,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["pokemons", pageNumber],
    queryFn: () =>
      fetchPokemonList({
        limit: NUMBER_OF_PAGES,
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

      {/* Container for Total Pages and Current Page */}
      <div className="container flex justify-center ml-20 mt-10">
        <p className="text-lg font-semibold">Total Pages: {pokemons.count}</p>
        <span className="mx-4">|</span> {/* Spacer */}
        <p className="text-lg font-semibold">Current Page: {pageNumber}</p>
      </div>

      {/* Show Spinner when Loading or Fetching */}
      <div>{isFetching || isLoading ? <Spinner /> : ""}</div>

      <PokemonList count={0} results={data ? data.results : pokemons.results} />

      <div className="container flex justify-center mb-5 ml-40">
        <Button
          className="mr-1"
          onClick={() => pageNumber > 0 && setPageNumber(pageNumber - 1)}
        >
          Previous
        </Button>
        <Button className="mr-1" variant="secondary">
          1
        </Button>
        <Button onClick={() => setPageNumber(pageNumber + 1)}>Next</Button>
      </div>
    </>
  );
};

export default HomePage;

export const getStaticProps = WithGetStaticProps(
  fetchPokemonList,
  "pokemons",
  60,
  NUMBER_OF_PAGES,
  0
);
