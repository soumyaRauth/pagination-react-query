export namespace Pokemon {
  export type Single = {
    name: string;
    url: string;
  };
  export type Multiple = {
    count: number;
    results: Pokemon.Single[];
    next: string;
    previous: string;
  };

  export type MultiplePartial = Partial<Multiple>;
  export type SinglePartial = Partial<Single>;
}

export namespace PaginationProp {
  export type PaginationProps = {
    pageNumber: number;
    limit: number;
    offset: number;
    setPageNumber: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
  };

  export type PaginationPropsOptional = Partial<PaginationProps>;
}
