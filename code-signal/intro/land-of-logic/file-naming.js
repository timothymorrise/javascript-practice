// You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

// Return an array of names that will be given to the files.

const fileNaming = a => {
    let o = []
    for (let i=0;i<a.length;i++) {
        if (!o.includes(a[i])) {
            o.push(a[i])
        } else {
            let n = 1
            while(o.includes(a[i]+"("+n+")")) n++
            o.push(a[i]+"("+n+")")
         };
     }
    return o
}

// You do not actually need to store every discreet value aprt from its "(d)"
// what is needed is the ability to get a count when pushing the new item
// staying focused on the problems at hand is important