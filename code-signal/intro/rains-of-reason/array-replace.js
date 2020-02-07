// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

const arrayReplace = (arr, a, b) => arr.map(n => (n===a) ? b : n)