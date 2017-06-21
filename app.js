'use strict';

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

//tableEl.appendChild(tableBodyEl);
// var tableEl = document.getElementById('generated-table');
//
// var tableBodyEl = document.createElement('tbody');
// tableEl.appendChild(tableBodyEl);

// var allStores = [firstAndPike, seaTacAir, seattleCenter, capHill, alki];
var hoursOpen = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];

var salesWork = document.getElementById('sales-worksheet');
// var totalCookies =
// for (var i = 0; i < allStores.length; i++) {
//   salesPerStore(allStores[i]);
// }
function Store(name, minCust, maxCust, avgCookiePerSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.averageCustHour = 0;
  // this.totalCookies = totalCookies;
  this.results = [];
  this.totalSales = 0;
}

var firstAndPike = new Store('First and Pike', 23, 65, 6.3);
var seaTacAir = new Store('SeaTac Air', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capital Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

// var seaTacAir = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookiePerSale: 1.2,
//   averageCustHour: 0,
//   cookiesBoughtHour: [],
//   totalCookies: 0,
//   hoursOpen: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM']
// };
Store.prototype.randnum = function() {
  return Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
};

Store.prototype.makeRow = function(){
  var tableEl = document.getElementById('table');

  var newRowEl = document.createElement('tr');

  var nameDataEl = document.createElement('td');
  nameDataEl.textContent = this.name;
  newRowEl.appendChild(nameDataEl);

  // var minCustEl = document.createElement('td');
  // // minCustEl.textContent = this.minCust;
  // newRowEl.appendChild(minCustEl);
  //
  // var maxCustEl = document.createElement('td');
  // // maxCustEl.textContent = this.maxCust;
  // newRowEl.appendChild(maxCustEl);

  for (var i=0; i < this.results.length; i++) {
    var insertEl = document.createElement('td');
    insertEl.textContent = this.results[i];
    newRowEl.appendChild(insertEl);
  }


  var totalsEl = document.createElement('td');
  totalsEl.setAttribute('class', 'totals');
  totalsEl.textContent = this.totalSales;
  newRowEl.appendChild(totalsEl);

  tableEl.appendChild(newRowEl);

};







var allStores = [firstAndPike, seaTacAir, seattleCenter, capHill, alki];

for (var s = 0; s < allStores.length; s++) {
  var currentStore = allStores[s];
  for (var i = 1; i <=  hoursOpen.length; i++) {
    currentStore.hourlySales = Math.floor((currentStore.randnum() * currentStore.avgCookiePerSale));
    currentStore.totalSales += currentStore.hourlySales;
    var currentHour = hoursOpen[i];
    currentStore.results.push(currentStore.hourlySales);
  }
  currentStore.makeRow();
}

// var newResultsArray = Store[this.results];
// var newResults = this.results;
