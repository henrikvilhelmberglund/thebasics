"use strict";
// Enum är en namngiven konstant med två värden
// namnet och en "[numerisk]" värderepresentation
const NEW = "new";
const PENDING = "pending";
const SOLVED = "solved";
const CLOSED = "closed";
const supportStatus = "new" /* SupportStatus.NEW */;
function isSolved(status) {
    return status === "solved" /* SupportStatus.SOLVED */;
}
isSolved("pending" /* SupportStatus.PENDING */);
