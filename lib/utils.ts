import { clsx, type ClassValue } from "clsx";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { twMerge } from "tailwind-merge";
import { PaginationProp, Pokemon } from "./types";
import { Pagination } from "@/components/ui/pagination";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WithGetStaticProps = <T>(
  fetcher: (args: PaginationProp.PaginationProps) => Promise<T>,
  paramName: string,
  revalidateValue: number,
  limit: number,
  offset: number
): GetStaticProps<{ [key: string]: T }> => {
  return async () => {
    const response = await fetcher({
      limit,
      offset,
      pageNumber: 0,
      setPageNumber: 0,
      totalPages: 0,
      onPageChange: function (pageNumber: number): void {
        throw new Error("Function not implemented.");
      },
    });

    return {
      props: {
        [paramName]: response,
      },
      revalidate: revalidateValue,
    };
  };
};

export const createPair = <T, G>(key: T, value: G): [T, G] => {
  return [key, value];
};

export const sum = <T extends number>(array: Array<T>): number => {
  return 3;
};

//-Index exercise type
export const IndexOne = <T>(obj: {
  [key: string]: T;
}): { [key: string]: string } => {
  const result: { [key: string]: string } = {};
  for (let key in obj) {
    result[key] = String(obj[key]);
  }
  return result;
};

export const getValue = (
  obj: { [key: number]: number },
  keyVal: number
): number => {
  return obj[keyVal];
};

export const ensureStringValues = <U>(obj: { [key: string]: U }) => {
  const result: { [key: string]: string } = {};

  for (const k in obj) {
    result[k] = String(obj[k]);
  }
  return result;
};

export const sumValues = (obj: { [key: string]: number }): number => {
  let sum = 0;
  for (const key in obj) {
    sum += obj[key];
  }
  return sum;
};

export const countProperties = (obj: {
  [key: string]: string | undefined;
}) => {};
