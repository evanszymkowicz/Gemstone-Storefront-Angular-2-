import { GemModel } from './gem-model';

export const GEMS: GemModel[] = [
  {
    id: 1,
    name: 'Dodecahedron',
    price: 2.95,
    description: "Some gems have hidden qualities beyonf their lustre, beyond their shine... Dodecahredon is one of those gems",
    fullImagePath: "./assets/img/gem-01.gif"
  }, {
    id: 2,
    name: 'Pentagonal',
    price: 5.95,
    description: 'The origin of the pentagonal gem is unknown, hence it\'s low value',
    fullImagePath: './assets/img/gem-02.gif'
  }, {
    id: 3,
    name: 'Hexagonal',
    price: 12.95,
    description: 'The hexagonal gem is one of our best sellers',
    fullImagePath: './assets/img/gem-03.gif'
  }
];
