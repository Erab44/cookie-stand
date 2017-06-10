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

var totalCookies = 0;

function custHour(min, max) {
  return Math.random() * (max - min) + min;
}

function cookiesPerHour() {
  totalCookies += cookiesPerHour;
  return avgCookiePerSale * custHour;
}

custHour(23, 65);
cookiesPerHour();
