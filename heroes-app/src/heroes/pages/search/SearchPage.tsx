import { HeroStats } from '@/heroes/components/HeroStats';
import { CustomJumbotron } from '../../../components/custom/CustomJumbotron';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useQuery } from '@tanstack/react-query';
import { searchHeroesAction } from '@/heroes/actions/search-heroes.action';
import { useSearchParams } from 'react-router';

export const SearchPage = () => {

  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? undefined;
  const strength = searchParams.get("strength") ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ['search', { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  return (
    <>
      {/* Header */}
      <CustomJumbotron title="Search Heroes" subtitle="Find your favorite heroes quickly and easily." />

      {/* Breadcrumbs */}
      <CustomBreadcrumbs currentPage="Search" />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Search Controls */}
      <SearchControls />

      {/* Heroes List */}
      <HeroGrid heroes={heroes ?? []} />
    </>
  )
}

export default SearchPage