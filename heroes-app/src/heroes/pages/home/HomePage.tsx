import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";
import { useMemo } from "react";

type ActiveTab = "all" | "favorites" | "heroes" | "villains";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get("tab") ?? "all";
  const selectedTab = useMemo(() => {
    const validTabs: ActiveTab[] = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab as ActiveTab) ? (activeTab as ActiveTab) : "all";
  }, [activeTab]);

  const { data: heroesResponse } = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

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
              return prev
            })}>
              All Characters (16)
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
              return prev
            })}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setSearchParams((prev) => {
                prev.set("tab", "villains");
                return prev
              })}
            >
              Villains (2)
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
            <HeroGrid heroes={[]} />
          </TabsContent>

          <TabsContent value="villains">
            {/* Content for Villains */}
            <h1>Villains</h1>
            <HeroGrid heroes={[]} />
          </TabsContent>
        </Tabs>

        {/* Character Grid */}
        {/* <HeroGrid /> */}

        {/* Pagination */}
        <CustomPagination totalPages={8} />
      </>
    </>
  );
};
