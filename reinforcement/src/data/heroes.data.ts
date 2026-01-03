
export interface Hero {
  id: number;
  name: string;
  owner: Owner;
}


export interface HeroTwo {
  id: number;
  name: string;
  owner: OwnerTwo;
}

type Owner = 'DC' | 'Marvel';
export enum OwnerTwo{
  DC = 'DC', // 0 // DC
  Marvel = 'Marvel' // 1 // Marvel
}


export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
  {
    id: 6,
    name: 'Thor',
    owner: 'Marvel',
  }
];

export const heroesTwo: HeroTwo[] = [
  {
    id: 1,
    name: 'Batman',
    owner: OwnerTwo.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: OwnerTwo.Marvel
  },
  {
    id: 3,
    name: 'Superman',
    owner: OwnerTwo.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: OwnerTwo.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: OwnerTwo.Marvel,
  },
]

