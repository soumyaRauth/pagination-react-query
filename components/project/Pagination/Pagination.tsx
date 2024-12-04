import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { fetchPokemonList } from "@/lib/api";
import { PaginationProp } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const PaginationComponent = ({
  pageNumber,
}: PaginationProp.PaginationPropsOptional) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const { data, error, isLoading } = useQuery({
    queryKey: ["pagination", currentPage],
    queryFn: () =>
      fetchPokemonList({
        limit: 10,
        offset: currentPage,
        pageNumber: currentPage,
      }),
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => currentPage > 1 && handlePageChange(2)}
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={() => handlePageChange(3)}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
