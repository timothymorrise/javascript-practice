// Find the longest word from the given string

const longestWord = (str) => str.replace(/[\W_]+/g, " ").split(" ").reduce(
    (t, n) => n.length>t.length ? n : t
)
