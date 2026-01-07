import { useState, type KeyboardEvent } from "react";

interface SearchBarProps {
  placeholder?: string;
  buttonText: string;
  onQuery: (term : string) => void;
}

export const SearchBar = ({ placeholder = 'Search', buttonText, onQuery}: SearchBarProps) => {

  const [query, setQuery] = useState('')

  const handleSearch = () => {
    onQuery(query)
    setQuery('')
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <>
      <div className="search-container">
        <h1>{query}</h1>
        <input type="text" placeholder={placeholder} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={handleKeyDown}/>
        <button onClick={handleSearch}>{buttonText}</button>
      </div>
    </>
  )
}