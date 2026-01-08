import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { useGifs } from "./gifs/hooks/useGifs"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
  const {previousTems, gifs, handleOnSearch, handleTermClick} = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader title="Search Gifs" subtitle="Discover and share the perfect GIF." />

      {/* Search */}
      <SearchBar placeholder="Search gifs" buttonText="Search" onQuery={handleOnSearch}/>

      {/* Previous Searches */}
      <PreviousSearches searches={previousTems} onLabelClicked={handleTermClick}/>

      {/* Gifs */}
      <GifList gifs={gifs} />
    </>
  )
}
