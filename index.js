const compiler = require("./compiler");

const input = `
(add 2 (sub 4 3));
(div (mult 2 1) 4);
`;

const output = compiler(input);

console.log(output);