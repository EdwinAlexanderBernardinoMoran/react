import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";
import { useQueryParameters } from "@/heroes/hooks/useQueryParameters";

export const HomePage = () => {

  const { page, limit, category, selectedTab, setSearchParams } = useQueryParameters();
  // Cuando la funcion que esta dentro de useQuery recibe argumentos, esos argumentos tienen que ser parte del queryKey, para que react-query sepa cuando volver a ejecutar la consulta. En este caso, cada vez que cambie el valor de page o limit, se volvera a ejecutar la consulta para obtener los heroes de esa pagina y con ese limite.

  const { data: heroesResponse } = usePaginatedHero(+page, +limit, category);
  const { data: summary } = useHeroSummary();

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Superhero Universe"
          subtitle="Discover, explore, and manage your favorite superheroes and villains"
        />

        {/* Breadcrumbs */}
        <CustomBreadcrumbs currentPage="Heroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setSearchParams((prev) => {
              prev.set("tab", "all");
              prev.set("category", "all");
              prev.set("page", "1");
              return prev
            })}>
              All Characters {summary?.totalHeroes}
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setSearchParams((prev) => {
                prev.set("tab", "favorites");
                return prev
              })}
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setSearchParams((prev) => {
              prev.set("tab", "heroes");
              prev.set("category", "hero");
              prev.set("page", "1");

              return prev
            })}>
              Heroes {summary?.heroCount}
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setSearchParams((prev) => {
                prev.set("tab", "villains");
                prev.set("category", "villain");
                prev.set("page", "1");

                return prev
              })}
            >
              Villains {summary?.villainCount}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Content for All Characters */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>

          <TabsContent value="favorites">
            {/* Content for Favorites */}
            <h1>Favorites</h1>
            <HeroGrid heroes={[]} />
          </TabsContent>

          <TabsContent value="heroes">
            {/* Content for Heroes */}
            <h1>Heroes</h1>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>

          <TabsContent value="villains">
            {/* Content for Villains */}
            <h1>Villains</h1>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
        </Tabs>

        {/* Character Grid */}
        {/* <HeroGrid /> */}

        {/* Pagination */}
        <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
      </>
    </>
  );
};
