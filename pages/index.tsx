import Header from "@/components/project/Header.tsx/Header";
import PokemonList from "@/components/project/Posts/PokemonList";
import Posts from "@/components/project/Posts/PokemonList";
import { fetchPokemonList } from "@/lib/api";
import { PokemonProps } from "@/lib/types";
import { WithGetStaticProps } from "@/lib/utils";
import { count } from "console";
import { InferGetStaticPropsType } from "next";

const HomePage = ({
  pokemons,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("pokemons printing");
  console.log(pokemons);

  return (
    <>
      <Header title="my blog" caseName="title" recentButton={false} />
      <PokemonList count={0} results={pokemons.results} />
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
