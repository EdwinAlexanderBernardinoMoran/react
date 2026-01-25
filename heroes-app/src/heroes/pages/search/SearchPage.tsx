import { HeroStats } from '@/heroes/components/HeroStats';
import { CustomJumbotron } from '../../../components/custom/CustomJumbotron';
import { SearchControls } from './ui/SearchControls';

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron title="Search Heroes" subtitle="Find your favorite heroes quickly and easily." />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Search Controls */}
      <SearchControls />
    </>
  )
}

export default SearchPage