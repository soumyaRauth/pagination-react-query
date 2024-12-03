export namespace Pokemon {
  export type Single = {
    name: string;
    url: string;
  };
  export type Multiple = {
    count: number;
    results: Pokemon.Single;
  };
}


export namespace Pagination{
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

