A very simple compiler written in JS that converts lisp-style functions to C-style functions.
Rules:
Expression is of type: `(funname x y z ...);`, funname is the name of the function and can only contain lower-case letters, and x, y, z are function parameters that can be of type number or expression. `;` symbols end of expression and another expression can follow after, whitespace, newline or no space can come between expressions. Final expression may or may not end with `;`.

This is a practice project.