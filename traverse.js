module.exports = function traverse(ast) {
    function walkNode(node) {
        if (node.type === 'NumberLiteral') {
            return {
                type: 'NumericLiteral',
                value: node.value,
            }
        }
        const arguments = node.params.map(param => walkNode(param, node));
        
        return {
            type: 'CallExpression',
            callee: {
                type: 'Identifier',
                name: node.name,
            },
            arguments,
        }
    }

    return ast.body.map(statement => ({
        type: 'ExpressionStatement',
        expression: walkNode(statement),
    }));
}