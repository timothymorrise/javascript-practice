// Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.

const arithmeticExpression = (a, b, c) => {
    return (a+b===c || a-b===c || a*b===c || a/b===c )
}

// a sexy verion uses the .some method and eval to determine