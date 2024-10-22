function indexOf(arr, v, s = 0) {
    let n = s
    for (var i = s; i < arr.length; i++) {
        if (arr[i] === v){
            return n
        }
        n++
    }
    return -1
}

function lastIndexOf(arr, v, s = arr.length-1) {
    let n = s
    for (var i = s; i >= 0; i--) {
        if (arr[i] === v){
            return n
            }
        n--
    }
    return -1
}

function includes(arr, v) {
    if (lastIndexOf(arr, v) === -1) {
        return false
    }
    return true
}
