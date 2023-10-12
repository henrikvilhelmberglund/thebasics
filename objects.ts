// Objekt som funktionsargument
function printMovieInfo2(movie: { title: string; releaseYear: number }): void {
  console.log(`${movie.title} - ${movie.releaseYear}`);
}

printMovieInfo2({ title: "The Equalizer 3", releaseYear: 2023 });

const movie = { title: "Taken", releaseYear: 2008 };

printMovieInfo2(movie);

// Använda type-nyckelordet för att beskriva en typ

type Movie = { title: string; releaseYear: number; director: string };

const batmanBegins: Movie = {
  title: "Batman Begins",
  releaseYear: 2005,
  director: "Christopher Nolan",
};

function displayMovieInfo(movie: Movie): void {
  console.log(`${movie.title} - ${movie.releaseYear} - ${movie.director}`);
}

displayMovieInfo(batmanBegins);

type Vehicle = {
  readonly id: number;
  registrationNumber: string;
};

const volvo: Vehicle = {
  id: 1,
  registrationNumber: "ABC123",
};

// ? readonly gör att vi inte kan manipulera
// volvo.id = 14;

type Car = {
  color: string;
};

type VehicleGearType = {
  numberOfGears: number;
};

// Intersection types
type SuperCar = Vehicle & Car & VehicleGearType;
type SuperDuperCar = Vehicle & Car & VehicleGearType & { horsePower: number };

const mySuperCar: SuperCar = {
  id: 2,
  registrationNumber: "ABC123",
  color: "white",
  numberOfGears: 6,
};

const Bugatti: SuperDuperCar = {
  id: 3,
  registrationNumber: "ABC123",
  color: "black",
  numberOfGears: 6,
  horsePower: 1000,
};
