"use strict";
// Funktioner med typade argument
// const myFunction = (name: string, age: number) => {};
// ? best practice när man inte vill returnera: void
const myFunction = (name, age) => {
    console.log(name, age);
};
myFunction("karl", 16);
// Funktioner med returtyp
function sayHello(name) {
    const greeting = `Välkommen ${name}`;
    return greeting;
}
const square = (num) => {
    return num * num;
};
console.log(square(23));
// Implicit typhantering
const categories = ["action", "drama", "horror"];
categories.map((category) => {
    return category.toUpperCase();
});
// Void return
function printMovieInfo(title) {
    console.log(title);
}
function printMovie(title) {
    console.log(title);
}
// Return type Never
const throwException = (errorMsg, errorCode) => {
    throw new Error();
};
function mainLoop() {
    while (true) {
        console.log("I am running forever");
    }
}
