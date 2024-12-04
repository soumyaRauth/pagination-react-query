import Header from "@/components/project/Header.tsx/Header";
import PokemonList from "@/components/project/Posts/PokemonList";
import Spinner from "@/components/project/Spinner/Spinner";
import { fetchPokemonList } from "@/lib/api";
import { Pokemon } from "@/lib/types";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const PAGE_LIMIT: Readonly<number> = 81;
const MegaPage = () => {
  //-Infinite query
  const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery({
    queryKey: ["infiniteTest"],
    queryFn: ({ pageParam = 1 }) =>
      fetchPokemonList({
        limit: PAGE_LIMIT,
        offset: (pageParam - 1) * PAGE_LIMIT,
      }),
    initialPageParam: 1,
    getNextPageParam: (
      lastPage: Pokemon.MultiplePartial,
      allPages: Pokemon.MultiplePartial[]
    ): number | undefined => {
      //!returns the number value of the next page
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    placeholderData: keepPreviousData,
  });

  //-inview hook
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  return (
    <>
      <Header title="my blog" caseName="title" recentButton={false} />

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

      <div ref={ref}>{isFetchingNextPage && <Spinner />}</div>
    </>
  );
};

export default MegaPage;
