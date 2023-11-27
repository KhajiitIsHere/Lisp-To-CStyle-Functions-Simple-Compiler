module.exports = function generateCode(node) {
    if (node.type === 'NumericLiteral') {
        return node.value;
    } 
    else if (node.type === 'Identifier') {
        return node.name;
    } 
    else if (node.type === 'CallExpression') {
        const funName = generateCode(node.callee);
        const funArgs = node.arguments.map(generateCode).join(', ');
        return `${funName}(${funArgs})`;
    }
    else if (node.type === 'ExpressionStatement') {
        return `${generateCode(node.expression)};`;
    }
    else if (node.type === 'Program') {
        return node.body.map(generateCode).join('\n');
    }
}