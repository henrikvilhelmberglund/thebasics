// Enum är en namngiven konstant med två värden
// namnet och en "[numerisk]" värderepresentation

const NEW: string = "new";
const PENDING: string = "pending";
const SOLVED: string = "solved";
const CLOSED: string = "closed";

//  ! inte utan const

// enum SupportStatus {
//   NEW = 10,
//   PENDING,
//   SOLVED,
//   CLOSED,
// }

// ? när man deklarerar på ett korrekt sätt blir koden mer optimerad

// const enum SupportStatus {
//   NEW = 10,
//   PENDING = 15,
//   SOLVED = 20,
//   CLOSED = 25,
// }


const enum SupportStatus {
  NEW = "new",
  PENDING = "pending",
  SOLVED = "solved",
  CLOSED = "closed",
}

const supportStatus = SupportStatus.NEW;

function isSolved(status: SupportStatus): boolean {
  return status === SupportStatus.SOLVED;
}

isSolved(SupportStatus.PENDING)
