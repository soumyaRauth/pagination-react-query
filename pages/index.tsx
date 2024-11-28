import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { InferGetStaticPropsType } from "next";
import { WithGetStaticProps } from "@/lib/utils";
import { fetchPokemonData } from "@/lib/api";
import { PaginationProp, SinglePokemonProp } from "@/lib/types";
import { useState } from "react";

export default function Home({
  pokemons,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [paginationValue, setPaginationValue] = useState<PaginationProp>({
    offset: 1,
    limit: 2,
  });
  return (
    <div>
      {pokemons.results.map((poke: SinglePokemonProp) => (
        <div>
          <div>{poke.name}</div>
          <div>{poke.url}</div>
        </div>
      ))}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <Button variant="secondary">Secondary Test</Button>
    </div>
  );
}

export const getStaticProps = WithGetStaticProps(
  () => fetchPokemonData({ offset: 0, limit: 10 }),
  "pokemons"
);
