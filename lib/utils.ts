import { clsx, type ClassValue } from "clsx";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { twMerge } from "tailwind-merge";
import { PaginationProps, PokemonProps } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WithGetStaticProps = <T>(
  fetcher: (args: PaginationProps) => Promise<T>,
  propName: string,
  revalidateValue: number,
  limit: number, // Pass `limit` as a parameter
  offset: number
): GetStaticProps => {
  return async (context?: GetStaticPropsContext) => {
    const response = await fetcher({ limit, offset });

    console.log("FETCHER RESPONSE");
    console.log("====================");
    console.log(response);

    return {
      props: {
        [propName]: response as PokemonProps,
      },
      revalidate: revalidateValue,
    };
  };
};
