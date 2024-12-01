import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PokemonProps, SinglePokemonProp } from "@/lib/types";
const PokemonList = (data: PokemonProps) => {
  return (
    <>
      <div className="container mx-auto p-6 space-y-6">
        {/* Responsive grid layout for posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.results.map((pokemon: SinglePokemonProp) => (
            <Card key={1} className="hover:shadow-lg">
              {/* Card Header with title and description */}
              <CardHeader>
                <CardTitle>{pokemon.name}</CardTitle>
                <CardDescription>{pokemon.url}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonList;
