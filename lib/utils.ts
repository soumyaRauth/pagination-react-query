import { clsx, type ClassValue } from "clsx";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { twMerge } from "tailwind-merge";
import { PaginationProps, PokemonProps } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WithGetStaticProps = <T>(
  fetcher: (args: PaginationProps) => Promise<T>,
  paramName: string,
  revalidateValue: number,
  limit: number,
  offset: number
): GetStaticProps<{ [key: string]: T }> => {
  return async () => {
    const response = await fetcher({ limit, offset });

    return {
      props: {
        [paramName]: response,
      },
      revalidate: revalidateValue,
    };
  };
};
