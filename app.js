'use strict'
function storeSales(min, max) {
  return Math.floor(Math.random() * ((max +1) - min) + min)
}
// function cookiesPerHour() {
//   for(var i = 0; i < store.hoursOpen.length; i++){
//     store.averageCustHour = storeNumber(store.minCust, store.maxCust);
//
//   }
//}
function salesPerStore(store){
  var sectionEl = document.createElement('section');
  //step 1
  var headerEl = document.createElement('h4');
  var listEl = document.createElement('ul');
  var listItemEl = document.createElement('li');
  //step 2
  sectionEl.appendChild(headerEl);
  headerEl.appendChild(listEl);
  listEl.appendChild(listItemEl);
}

// var tableEl = document.getElementById('generated-table');
//
// var tableBodyEl = document.createElement('tbody');
// tableEl.appendChild(tableBodyEl);

// var allStores = [firstAndPike, seaTacAir, seattleCenter, capHill, alki];

var salesWork = document.getElementById('sales-worksheet')

// for (var i = 0; i < allStores.length; i++) {
//   salesPerStore(allStores[i]);
// }
function Store(name, minCust, maxCust, avgCookiePerSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.averageCustHour = 0;
  this.totalCookies = totalCookies;
  this.hoursOpen = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
}

var firstAndPike = new Store('First and Pike', 23, 65, 6.3)
  minCust: 23,
  maxCust: 65,
  avgCookiePerSale: 6.3


var seaTacAir = {
  minCust: 3,
  maxCust: 24,
  avgCookiePerSale: 1.2,
  averageCustHour: 0,
  cookiesBoughtHour: [],
  totalCookies: 0,
  hoursOpen: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM']
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


var allStores = [firstAndPike, seaTacAir, seattleCenter, capHill, alki];

for (var i = 0; i < allStores.length; i++) {
  salesPerStore(allStores[i]);
}
