// Make things proper nouns

const properNounCorrection = s => {
    return s = s[0].toUpperCase() + s.slice(1,s.length).toLowerCase()
}