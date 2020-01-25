//Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.

cosnt = isMAC48Address = (str) => {
    let test = str.split("-")
    if (test.length !== 6 || test.every((n) => n.length!==2) ) return false
    return test.join("").match( /^([\dA-F]{2}){6}$/ ) ? true:false
}
