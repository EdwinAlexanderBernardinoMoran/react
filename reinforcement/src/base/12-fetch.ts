import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'CeNBMyhwU8Eb5oT8j3CMdkqmLNvkWpqM'

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

const createImageDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

myRequest
    .then((response) => response.json())
    .then(({ data }: GiphyRandomResponse) => {

        const imageUrl = data.images.original.url;
        createImageDOM(imageUrl);
    })
    .catch((reason) => {
        console.log(reason);
    })