interface order {
  orderPlaced: string;
  orderTotal: number;
  orderNumber: string;
  shipTo: string;
  delivery: string;
  product: string;
  author?: string;
  returnWindow: string;
  prodTotal: number;
  product2?: string;
  prodTotal2?: number;
}
const orderHistory: order[] = [
  {
    orderPlaced: 'August 4, 2020',
    orderTotal: 34.0,
    orderNumber: '114-3941689-8772232',
    shipTo: 'JS Masher',
    delivery: 'August 8, 2020',
    returnWindow: 'September 7, 2020',
    product: 'JavaScript for impatient Programmers',
    author: 'Dr. Axel Rauschmayer',
    prodTotal: 31.55,
  },
  {
    orderPlaced: 'July 19, 2020',
    orderTotal: 44.53,
    orderNumber: '113-9984268-1280257',
    shipTo: 'JS Masher',
    delivery: 'July 20, 2020',
    returnWindow: 'August 19, 2020',
    product: 'The Timeless Way of Building',
    author: 'Christopher Alexander',
    prodTotal: 41.33,
  },
  {
    orderPlaced: 'July 4, 2020',
    orderTotal: 17.22,
    orderNumber: '114-2875557-9059409',
    shipTo: 'JS Masher',
    delivery: 'July 7, 2020',
    returnWindow: 'August 5, 2020',
    product:
      'GameCube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for Wii U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    prodTotal: 15.98,
  },
  {
    orderPlaced: 'July 3, 2020',
    orderTotal: 138.93,
    orderNumber: '113-2883177-2648248',
    shipTo: 'JS Masher',
    delivery: 'July 5, 2020',
    returnWindow: 'August 4, 2020',
    product:
      'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
    prodTotal: 94.95,
    product2: 'The Art of Sql',
    author: 'Stephane Faroult',
    prodTotal2: 33.99,
  },
];
