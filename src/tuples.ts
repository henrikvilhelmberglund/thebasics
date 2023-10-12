// Enkel tuple
// Definierad array av en specifik längd men också av dess typer

const rgbColor: [number, number, number] = [255, 0, 255];
// gör inte detta
// rgbColor.push(255);

type HttpResponse = [number, string];

const okResponse: HttpResponse = [200, "ok"];
const createdResponse: HttpResponse = [201, "Created"];
const notFoundResponse: HttpResponse = [404, "Not Found"];
const badRequestResponse: HttpResponse = [400, "Bad Request"];

const responses: HttpResponse[] = [
  [200, "OK"],
  [201, "created"],
  [404, "Not found"],
  [400, "Bad request"],
];
