import type { Gif } from "../interfaces/gif.interface";
import type { GiphyGif } from "../interfaces/giphy.response";

export class GifMapper {
    static mapRestGiphyResponseToGif(item: GiphyGif): Gif {
        return {
            id: item.id,
            title: item.title,
            url: item.images.fixed_height.url,
            width: parseInt(item.images.fixed_height.width),
            height: parseInt(item.images.fixed_height.height),
        }
    }

    static mapRestGiphyItemsToGiArray(items: GiphyGif[]): Gif[]{
    return items.map(GifMapper.mapRestGiphyResponseToGif);
  }
}