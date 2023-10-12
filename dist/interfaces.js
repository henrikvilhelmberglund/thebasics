"use strict";
// Ett interface definierar ett objekts struktur
// ? Rekommenderat så fort vi vill definiera objekt istället för type
const taken = {
    id: 23,
    title: "Taken",
    director: "Pierre Morel",
    releaseYear: 2008,
    // length: 94,
    displayInfo() {
        return "Taken";
    },
    // language: "English",
};
const Ford = {
    id: 1,
    manufacturer: "Ford",
    model: "Fusion",
    registreringsNumber: "ABC123",
    milage: 2000,
};
const myBike = {
    id: 45,
    manufacturer: "Monark",
    hasFootbrake: true,
};
const truck = {
    id: 123523,
    model: "Big truck",
    manufacturer: "MACK",
    registreringsNumber: "VBT123",
    milage: 45000,
    tara: 3000,
};
