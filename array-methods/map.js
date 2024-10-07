'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const halfOff = prices.map((price) => ({
  price: price,
  salePrice: price / 2,
}));
console.log(halfOff);
const $price = prices.map((price) => ({
  price: '$' + price.toString(),
}));
console.log($price);
