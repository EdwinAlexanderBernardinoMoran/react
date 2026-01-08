import type { Gif } from "../interfaces/gif.interface";

interface GifListProps {
  gifs: Gif[];
}

export const GifList = ({ gifs }: GifListProps) => {
  return (
    <div className="gifs-container">
      {
        gifs.map(({id, title, url, width, height}) => (
          <div key={id} className="gif-card">
            <img src={url} alt={title}/>
            <h3>{title}</h3>
            <p>{width} x {height} (1.5MB)</p>
          </div>
        ))
      }
    </div>
  )
}