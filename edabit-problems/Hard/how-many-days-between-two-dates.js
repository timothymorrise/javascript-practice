// Create a function that takes two dates and returns the number of days between the first and second date.

const getDays = (date1, date2) => {
    let d1 = new Date(date1),
            d2 = new Date(date2)
    return Math.round(Math.abs((d1 - d2) / 86400000))
}