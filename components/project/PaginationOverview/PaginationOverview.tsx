import { Pokemon } from "@/lib/types";

type PaginationOverviewProp = {
  pokemons: Pokemon.Multiple;
  pageNumber: number;
};
const PaginationOverview = ({
  pokemons,
  pageNumber,
}: PaginationOverviewProp) => {
  return (
    <>
      <div className="container flex justify-center ml-20 mt-10">
        <p className="text-lg font-semibold">Total Pages: {pokemons.count}</p>
        {/* <span className="mx-4">|</span> Spacer */}
        {/* <p className="text-lg font-semibold">Current Page: {pageNumber}</p> */}
      </div>
    </>
  );
};

export default PaginationOverview;
