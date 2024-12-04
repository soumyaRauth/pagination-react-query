import Header from "@/components/project/Header.tsx/Header";
import PokemonList from "@/components/project/Posts/PokemonList";
import { fetchPokemonList } from "@/lib/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/project/Spinner/Spinner";

import { Pokemon } from "@/lib/types";

const NUMBER_OF_PAGES: Readonly<number> = 9;

const HomePage = () => {
  //- useInfiniteQuery implementaion
  const {
    data,
    isLoading,
    error,
    isFetching,
    isPending,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["infinitePokemons"],
    queryFn: ({ pageParam = 1 }) => {
      return fetchPokemonList({
        limit: NUMBER_OF_PAGES,
        offset: (pageParam - 1) * NUMBER_OF_PAGES,
      });
    },

    initialPageParam: 1,
    getNextPageParam: (lastPage: Pokemon.Multiple, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

  return (
    <>
      <Header title="my blog" caseName="title" recentButton={false} />

      {isFetching || isLoading || isPending ? <Spinner /> : ""}

      {data?.pages.map((page, index: number) => {
        return (
          <>
            {hasNextPage && (
              <PokemonList
                key={index}
                count={0}
                results={data ? page.results : []}
              />
            )}
          </>
        );
      })}
      <Button
        onClick={() => {
          fetchNextPage();
        }}
      >
        Fetch Next
      </Button>
    </>
  );
};

export default HomePage;
