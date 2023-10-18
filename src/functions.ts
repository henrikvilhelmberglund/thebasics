// Funktioner med typade argument

// const myFunction = (name: string, age: number) => {};
// ? best practice när man inte vill returnera: void
const myFunction = (name: string, age: number): void => {
  console.log(name, age);
};

function myFunction2(name: string, age: number) {}

// Funktioner med returtyp

function sayHello(name: string): string {
  const greeting = `Välkommen ${name}`;
  return greeting;
}

const square = (num: number): number => {
  return num * num;
};

console.log(square(23));

// Implicit typhantering

const categories = ["action", "drama", "horror"];
categories.map((category) => {
  return category.toUpperCase();
});

// Void return
function printMovieInfo(title: string) {
  console.log(title);
}

function printMovie(title: string): void {
  console.log(title);
}

// Return type Never
const throwException = (errorMsg: string, errorCode: number): never => {
  throw new Error();
};

function throwException2(errorMsg: string, errorCode: number): never {
  throw new Error();
}

function mainLoop(): never {
  while (true) {
    console.log("I am running forever");
  }
}
