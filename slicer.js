function slice(arr, s = 0, e = arr.length) {
    if (s < 0) {
        s += arr.length
        if (s < 0) {
            s = 0
        }
    }
    if( e < 0 ){
        e += arr.length
    }
    let sl = []
    for (let i = s; i < e; i++) {
        sl.push(arr[i])
    }
    if (typeof(arr) === 'string') {
        return sl.join('')
    }
return sl
}