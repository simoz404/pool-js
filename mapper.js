function map(arr, func) {
    let narr = []
    for (let i = 0; i < arr.length; i++) {
        narr.push(func(arr[i], i, arr))
    }
    return narr
}

function flatMap(arr, func) {
    let narr = []
    for (let i = 0; i < arr.length; i++) {
        const s = func(arr[i], i, arr)
        if (Array.isArray(s)) {
            narr.push(...s)
        } else {
            narr.push(s)
        }
    }
    return narr
}
