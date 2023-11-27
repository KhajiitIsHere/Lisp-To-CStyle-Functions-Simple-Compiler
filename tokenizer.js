const LETTERS = /[a-z]/i;
const WHITESPACE = /(\s|\n)/;
const NUMBERS = /\d/;

module.exports =  function tokenizer(input) {
    const tokens = [];

    let current = 0;
    let numParen = 0;

    while (current < input.length) {
        let char = input[current];
        if (char === '(' || char === ')') {
            tokens.push({
                type: 'paren',
                value: char,
            });
            current += 1;
            numParen += char === '(' ? 1 : -1;
            continue;
        } 
        if (LETTERS.test(char)) {
            let value = '';
            while (LETTERS.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({
                type: 'name',
                value,
            });
            continue;
        } 
        if (WHITESPACE.test(char)) {
            current += 1;
            continue;
        }
        if (NUMBERS.test(char)) {
            let value = '';
            while (NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({
                type: 'number',
                value,
            });
            continue;
        }
        if (char === ';') {
            if (numParen !== 0) {
                throw new TypeError(`Unexpected symbol: '${char}'`);
            }
            current += 1;
            continue;
        }
        
        throw new TypeError(`Unknown char: '${char}'`);
    }

    return tokens;
}