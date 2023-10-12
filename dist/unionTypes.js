"use strict";
// Basic union type
let modelYear;
modelYear = 2019;
modelYear = "2019";
// ? kan använda t.ex Date om man har en metod som returnerar number
modelYear = new Date("2017-01-01").getFullYear();
let coordinates = { x: 10, y: 10 };
coordinates = { lat: 100.02, long: 170.53 };
// Funktioner med Union-typargument
function displayModelYear(modelYear) {
    console.log(`The vehicles model year is ${modelYear}`);
}
displayModelYear(2019);
displayModelYear("2020");
displayModelYear(new Date("2018-11-25").getFullYear());
// Uniontyper med listor
// !  måste ha parenteser runt, sedan []
const coords = [];
// coords.push({x: 20, y: 20, lat: 100.4, long: 34.5})
coords.push({ x: 20, y: 20 });
coords.push({ lat: 150.5, long: 120.9 });
// Literal types
let movieTypes;
// movieTypes = "Comedy"
movieTypes = "Action";
