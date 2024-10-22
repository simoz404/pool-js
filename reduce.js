function fold(arr, func, acc) {
    for (let i = 0; i < arr.length; i++) {
        acc = func(acc, arr[i], i, arr)
    }
    return acc
}

function foldRight(arr, func, acc) {
    for (let i = arr.length-1; i >= 0; i--) {
        acc = func(acc, arr[i], i, arr)
    }
    return acc
}

function reduce(arr, func, acc=arr[0]) {
    if (arr.length < 2) {
        console.log('error')
        return
    }
    for (let i = 1; i < arr.length; i++) {
        acc = func(acc, arr[i])
    }
    return acc
}

function reduceRight(arr, func, acc=arr[arr.length-1]) {
    if (arr.length < 2) {
        console.log('error')
        return
    }
    for (let i = arr.length-2; i >= 0; i--) {
        acc = func(acc, arr[i])
    }
    return acc
}