// Ett interface definierar ett objekts struktur
// ? Rekommenderat så fort vi vill definiera objekt istället för type

enum TVSerieCategoryEnum {
  ACTION,
  COMEDY,
  HORROR,
  THRILLER,
}

interface TVSerie {
  readonly id: number;
  title: string;
  director: string;
  releaseYear: number;
  length?: number;
  genre: TVSerieCategoryEnum[];
  displayInfo(): string;
}

const taken: TVSerie = {
  id: 23,
  title: "Taken",
  director: "Pierre Morel",
  releaseYear: 2008,
  // length: 94,
  displayInfo() {
    return "Taken";
  },
  genre: [TVSerieCategoryEnum.ACTION, TVSerieCategoryEnum.COMEDY],
  // language: "English",
};

// Reopening an interface (kan inte göra med type men kan med interface)

interface TVSerie {
  language?: string;
}

// Extending (utöka) an interface

interface Vehicle {
  readonly id: number;
  manufacturer: string;
}

interface Car extends Vehicle {
  registreringsNumber: string;
  model: string;
  milage: number;
}

interface Bike extends Vehicle {
  hasFootbrake: boolean;
}

const Ford: Car = {
  id: 1,
  manufacturer: "Ford",
  model: "Fusion",
  registreringsNumber: "ABC123",
  milage: 2000,
};

const myBike: Bike = {
  id: 45,
  manufacturer: "Monark",
  hasFootbrake: true,
};

// Utöka med flera interfaces

interface Truck extends Vehicle, Car {
  tara: number;
}

const truck: Truck = {
  id: 123523,
  model: "Big truck",
  manufacturer: "MACK",
  registreringsNumber: "VBT123",
  milage: 45000,
  tara: 3000,
};
