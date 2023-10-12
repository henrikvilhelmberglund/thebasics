"use strict";
// Objekt som funktionsargument
function printMovieInfo2(movie) {
    console.log(`${movie.title} - ${movie.releaseYear}`);
}
printMovieInfo2({ title: "The Equalizer 3", releaseYear: 2023 });
const movie = { title: "Taken", releaseYear: 2008 };
printMovieInfo2(movie);
const batmanBegins = {
    title: "Batman Begins",
    releaseYear: 2005,
    director: "Christopher Nolan",
};
function displayMovieInfo(movie) {
    console.log(`${movie.title} - ${movie.releaseYear} - ${movie.director}`);
}
displayMovieInfo(batmanBegins);
const volvo = {
    id: 1,
    registrationNumber: "ABC123",
};
const mySuperCar = {
    id: 2,
    registrationNumber: "ABC123",
    color: "white",
    numberOfGears: 6,
};
const Bugatti = {
    id: 3,
    registrationNumber: "ABC123",
    color: "black",
    numberOfGears: 6,
    horsePower: 1000,
};
