import { Card } from '../types/Card';

const cards: Card[] = [
  {
    id: '1',
    icon: {
      path: '/engine.svg',
      alt: 'Engine',
      width: 28,
      height: 20,
    },
    label: 'Engine',
    value: '2.9',
  },
  {
    id: '2',
    icon: {
      path: '/power.svg',
      alt: 'Power',
      width: 20,
      height: 22,
    },
    label: 'Power',
    value: '450',
  },
  {
    id: '3',
    icon: {
      path: '/speed.svg',
      alt: 'Max speed',
      width: 21,
      height: 21,
    },
    label: 'Max speed',
    value: '290',
  },
  {
    id: '4',
    icon: {
      path: '/seats.svg',
      alt: 'Seats',
      width: 23,
      height: 23,
    },
    label: 'Seats',
    value: '5',
  },
  {
    id: '5',
    icon: {
      path: '/zero-hundred.svg',
      alt: '0-100 km/h',
      width: 20,
      height: 23,
    },
    label: '0-100 km/h',
    value: '3.9',
  },
];

export { cards };
