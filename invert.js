function invert(obj) {
    let newobj = {}
    let arr = Object.entries(obj)
    for (let [k, v] of arr) {
        newobj[v] = k
    }
    return newobj
}
