const compiler = require("./compiler");

// Write only in this variable
const input = `
(add 2 (sub 4 3) 6);
(div (mult 2 1 (pow 5 10)) 4 5 1 20)
`;

console.log(compiler(input));