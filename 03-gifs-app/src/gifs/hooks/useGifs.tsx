import { useRef, useState } from "react"
import type { Gif } from "../interfaces/gif.interface"
import { getGifsByQuery } from "../actions/get-gifs-by-query.action"

export const useGifs = () => {
    const [previousTems, setPreviousTems] = useState<string[]>([])
    const [gifs, setGifs] = useState<Gif[]>([])

    const gifsCache = useRef<Record<string, Gif[]>>({})

    const handleTermClick = async (term: string) => {

        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }

        const gifs = await getGifsByQuery(term);
        setGifs(gifs)
    }
    
    const handleOnSearch = async (query: string = '') => {
        query = query.trim().toLowerCase()
    
        if (query.length === 0 ) return;
        
        if (previousTems.includes(query)) return
        setPreviousTems([query, ...previousTems].splice(0,7))
    
        const gifsItems = await getGifsByQuery(query);
        setGifs(gifsItems)

        
        console.log(gifsItems);
        
        gifsCache.current[query] = gifsItems
        console.log(gifsCache);
    }

    return {
        // values
        previousTems,
        gifs,

        // methods
        handleOnSearch,
        handleTermClick
    }
}