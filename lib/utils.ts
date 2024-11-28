import { clsx, type ClassValue } from "clsx";
import { GetStaticProps } from "next";
import { twMerge } from "tailwind-merge";
import { PokemonListProps } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WithGetStaticProps = (
  fethcer: <T>(args?: number) => Promise<T>,
  propsName: string
): GetStaticProps => {
  return async () => {
    const data: PokemonListProps = await fethcer();

    return {
      props: {
        [propsName]: data,
      },
    };
  };
};
