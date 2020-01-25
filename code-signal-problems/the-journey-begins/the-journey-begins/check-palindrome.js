// Given the string, check if it is a palindrome.

let checkPalindrome = (str) => {
    for (let i = 0; i < str.length / 2; ++i) {
        let first = str[i]
        let last = str[str.length - 1 - i]
        if (first !== last) return false;
    }
    return true;
}