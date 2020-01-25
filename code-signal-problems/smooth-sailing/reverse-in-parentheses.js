// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

const reverseStr = (str) =>  str.split("").reverse().join("")

const findLastParanthIndex = (s, n) => {
    n++
    for (let i=n; i<s.length; i++) {
        if (s[n]===")") return n
        n++
    }
}

const reverseInParentheses = (str) => {
    if (str.indexOf("(")!==-1) {
        // FIND INDEX OF LAST INSTANCE OF FIRST PARANTHETICAL
        let firstParanthIndex = str.lastIndexOf("(");
        // FIN INDEX OF CORRESPONDING END PARANTHETICAL
        let lastParanthIndex = findLastParanthIndex(str, firstParanthIndex);
        // REMOVE THE CORRESPONDING END PARANTHETICALS *AND* REVERSE THE SUBSTRING HELD IN THE RESPECTIVE INDECEES.
        str = str.slice(0,firstParanthIndex) +
            reverseStr(str.slice(firstParanthIndex+1,lastParanthIndex)) + 
            str.slice (lastParanthIndex+1);
        // CALL RECCURSION
        str = reverseInParentheses(str);
    }
    return str
}