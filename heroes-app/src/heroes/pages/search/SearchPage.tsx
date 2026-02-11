import { HeroStats } from '@/heroes/components/HeroStats';
import { CustomJumbotron } from '../../../components/custom/CustomJumbotron';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';

export const SearchPage = () => {
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
    </>
  )
}

export default SearchPage