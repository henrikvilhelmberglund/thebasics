"use strict";
// ? explicit typannotering
let movieTitle;
let movieLength;
let isCategoryAction;
movieTitle = "The Equalizer 3";
movieLength = 94;
isCategoryAction = true;
// movieTitle = 123;
// movieLength = "94";
// isCategoryAction = "true";
// ? implicit typannotering (type inference)
let tvSerie = "La Brea";
let isDrama = true;
// tvSerie = 123;
// isDrama = "false";
// ? Any type
// ! akta för att använda Any om det inte är absolut nödvändigt
let director = "Cristopher Nolan";
director = 10;
director = true;
director();
