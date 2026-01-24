import { HeroStats } from '@/heroes/components/HeroStats';
import { CustomJumbotron } from '../../../components/custom/CustomJumbotron';

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron title="Search Heroes" subtitle="Find your favorite heroes quickly and easily." />

      <HeroStats />
    </>
  )
}

export default SearchPage