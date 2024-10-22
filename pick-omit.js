function pick(obj, arr) {
    let newobj = {}
    let ar = Object.entries(obj)
    for (let [k, v] of ar) {
        if ((Array.isArray(arr) && arr.includes(k)) || (arr === k)){
            newobj[k] = v
        }
    }
    return newobj
}

function omit(obj, arr){
    let newobj = {}
    let ar = Object.entries(obj)
    for (let [k, v] of ar) {
        if ((!arr.includes(k)) && (arr !== k)){
            newobj[k] = v
        }
    }
    return newobj
}
