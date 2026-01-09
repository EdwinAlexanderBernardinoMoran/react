import { useEffect, useState, type KeyboardEvent } from "react";

interface SearchBarProps {
  placeholder?: string;
  buttonText: string;
  onQuery: (term : string) => void;
}

export const SearchBar = ({ placeholder = 'Search', buttonText, onQuery}: SearchBarProps) => {

  const [query, setQuery] = useState('')

  // Implementación del debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query)
    }, 700);

    return () => {
      clearTimeout(timeoutId)
    }
  }, [query, onQuery])

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
        <input type="text" placeholder={placeholder} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={handleKeyDown}/>
        <button onClick={handleSearch}>{buttonText}</button>
      </div>
    </>
  )
}