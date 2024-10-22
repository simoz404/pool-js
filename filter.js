function filter(arr, func) {
    let narr = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            narr.push(arr[i])
        }
    }
    return narr
}

function reject(arr, func) {
    let narr = []
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            narr.push(arr[i])
        }
    }
    return narr
}

function partition(arr, func) {
    return [filter(arr, func), reject(arr, func)]
}