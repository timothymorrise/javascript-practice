//Given a string, find out if it satisfies the IPv4 address naming rules.

const isIPv4Address = s => {
    let a = s.split(".")
    if (a.length !== 4) return false
    for (let i=0; i<a.length; i++) {
        let n = Number(a[i])
        if ( n !== 0 ) {
            if (!n) return false
        }
        if (a[i].length < 1 || n<0 || n>255) return false
    }
    return true
}