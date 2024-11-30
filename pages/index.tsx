import Header from "@/components/project/Header.tsx/Header";
import Posts from "@/components/project/Posts/Posts";
import { fetchPokemonList } from "@/lib/api";
import { PokemonProps } from "@/lib/types";
import { WithGetStaticProps } from "@/lib/utils";
import { count } from "console";
import { InferGetStaticPropsType } from "next";

const HomePage = ({
  pokemons,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Header title="my blog" caseName="title" recentButton={false} />
      <Posts count={0} results={pokemons.results}></Posts>
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
