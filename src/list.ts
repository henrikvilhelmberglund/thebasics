// Explicit typad array

const numberList: number[] = [1, 2, 3];
numberList[0] = 100;

// Implicit typad array
const numbersList = [1, 2, 3];
numbersList[1] = 200;

// Alternativ syntax till att skapa en array

const movieCategories: Array<string> = [];

// Listor baserade på egendefinierade typer

type Manufacturer = {
  name: string;
  country: string;
};

const manufacturerList: Manufacturer[] = [];
manufacturerList.push({ name: "Volvo", country: "Sweden" });

// Multidimensionella listor

const demo: string[][] = [[]];
const demo1: string[][][] = [[[]]];


