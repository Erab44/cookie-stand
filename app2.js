'use strict'

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookiePerSale: 6.3
};

var seaTacAir = {
  minCust: 3,
  maxCust: 24,
  avgCookiePerSale: 1.2
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookiePerSale: 3.7
};

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookiePerSale: 2.3
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookiePerSale: 4.6
};

/*
var storesMinMax = [
  {fpMin: 23, fpMax: 65},
  {airMin: 3, airMax: 24},
  {scMin: 11, scMax: 38},
  {capMin: 20, capMax: 38},
  {alkiMin: 2, alkiMax: 16}
];

var avgCookiePerSaleStore = [
  {firstAndPike: 6.3},
  {seaTacAir: 1.2},
  {seattleCenter: 3.7},
  {capHill: 2.3},
  {alki: 4.6}
];
*/
var cookiesPerHour = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

cookiesPerHour(alki.minCust, alki.maxCust);
console.log();