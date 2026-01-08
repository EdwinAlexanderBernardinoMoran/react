import type { GiphyResponse } from "../interfaces/giphy.response"
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api"; // Importa la instancia configurada de axios
import { GifMapper } from "../mappers/giphy.mapper";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
    const response = await giphyApi<GiphyResponse>('/search', {
        params: {
            q: query,
            limit: 10,
        }
    })

    return GifMapper.mapRestGiphyItemsToGiArray(response.data.data);
}