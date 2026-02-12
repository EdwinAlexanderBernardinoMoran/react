import { heroesTwo, HeroTwo, OwnerTwo } from '../data/heroes.data';

/**
 * 
 * @param owner 
 * @returns array of heroes filtered by owner
 */
export const getHeroesByOwner = (owner: OwnerTwo): HeroTwo[] => {
    const heroByOwners = heroesTwo.filter((heroes) => {
        return heroes.owner === owner;
    });

    if (heroByOwners.length === 0) return [];
    return heroByOwners;
}