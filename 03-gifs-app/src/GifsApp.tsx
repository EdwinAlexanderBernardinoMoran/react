import { mockGifs } from "./mock-data/gifs.mock"

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <div className="content-center">
        <h1>Search Gifs</h1>
        <p>Discover and share the perfect GIF.</p>
      </div>

      {/* Search */}
      <div className="search-container">
        <input type="text" placeholder="Search gifs" />
        <button>Search</button>
      </div>

      {/* Search previous */}
      <div className="previous-searches">
        <h2>Previous Searches</h2>

        <ul className="previous-searches-list">
          <li>Cat</li>
          <li>Dog</li>
          <li>Funny</li>
          <li>Memes</li>
          <li>Movies</li>
        </ul>
      </div>

      {/* Gifs */}
      <div className="gifs-container">
        {
          mockGifs.map(({id, title, url, width, height}) => (
            <div key={id} className="gif-card">
              <img src={url} alt={title}/>
              <h3>{title}</h3>
              <p>{width} x {height} (1.5MB)</p>
            </div>
          ))
        }
      </div>
    </>
  )
}
