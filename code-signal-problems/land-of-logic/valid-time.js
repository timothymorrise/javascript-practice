// Check if the given string is a correct time representation of the 24-hour clock.

const validTime = t => {
    let a = t.split(":")
    return (a[0]<24 && a[1]<60 )
}