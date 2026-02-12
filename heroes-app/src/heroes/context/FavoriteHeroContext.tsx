import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../interfaces/hero.interface";

interface FavoriteHeroContext {
    // State
    favorites: Hero[];
    favoriteCount: number;

    // Methods
    isFavorite: (hero: Hero) => boolean;
    toggleFavorite: (hero: Hero) => void;
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

const getFavoritesFromLocalStorage = (): Hero[] => {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
}

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
    const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage());

    const toggleFavorite = (hero: Hero) => {
        const heroExist = favorites.find(h => h.id === hero.id);

        if (heroExist) {

            // crea un nuevo arreglo excluyendo ese héroe.
            const newFavorites = favorites.filter((h) => h.id !== hero.id);
            setFavorites(newFavorites);
            return
        }

        setFavorites([...favorites, hero]);
    }

    // Retorna un booleano indicando si el héroe existe en el arreglo de favoritos.
    const isFavorite = (hero: Hero) => {
        return favorites.some(h => h.id === hero.id);
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites])

    return (
        <FavoriteHeroContext value={{
            // state
            favoriteCount: favorites.length,
            favorites: favorites,

            // methods
            isFavorite: isFavorite,
            toggleFavorite: toggleFavorite,
        }}>
            {children}
        </FavoriteHeroContext>
    )
}