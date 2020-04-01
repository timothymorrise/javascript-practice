// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

const arrayReplace = (a, m, n) => a.map(x=> x===m?n:x)