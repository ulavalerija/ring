const toTitleCase = require('to-title-case');

console.log(toTitleCase);

const firstAttempt = toTitleCase(`i'm having a hard time with the course`);
console.log(firstAttempt);

const title = `how to murder your life`;
const secondAttempt = toTitleCase(title);
console.log(secondAttempt);