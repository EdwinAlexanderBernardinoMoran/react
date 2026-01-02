
interface Hero {
    id: number;
    name: string;
    owner: Owner;
}


interface HeroTwo {
    id: number;
    name: string;
    owner: OwnerTwo;
}

type Owner = 'DC' | 'Marvel';
enum OwnerTwo{
    DC = 'DC', // 0 // DC
    Marvel = 'Marvel' // 1 // Marvel
}


const heroes: Hero[] = [
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

const heroesTwo: HeroTwo[] = [
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
]

