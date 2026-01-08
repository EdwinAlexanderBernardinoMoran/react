import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {

  const [previousTems, setPreviousTems] = useState(['dragon ball z'])

  const handleTermClick = (term: string) => {
    console.log(`Term clicked: ${term}`)
  }

  const handleOnSearch = (query: string = '') => {
    query = query.trim().toLowerCase()

    if (query.length === 0 ) return;
    
    if (previousTems.includes(query)) return
    setPreviousTems([query, ...previousTems].splice(0,7))
  }

  return (
    <>
      {/* Header */}
      <CustomHeader title="Search Gifs" subtitle="Discover and share the perfect GIF." />

      {/* Search */}
      <SearchBar placeholder="Search gifs" buttonText="Search" onQuery={handleOnSearch}/>

      {/* Previous Searches */}
      <PreviousSearches searches={previousTems} onLabelClicked={handleTermClick}/>

      {/* Gifs */}
      <GifList gifs={mockGifs} />
    </>
  )
}
