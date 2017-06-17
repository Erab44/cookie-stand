'use strict';


function Store(name, minCust, maxCust, avgCookiePerSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.averageCustHour = 0;
  // this.totalCookies = totalCookies;
}

var firstAndPike = new Store('First and Pike', 23, 65, 6.3);
var seaTacAir = new Store('SeaTac Air', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capital Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

hoursOpen = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
