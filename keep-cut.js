function cutFirst(s) {
    return s.slice(2)
}
function cutLast(s) {
    return s.slice(0, s.length-2)
}
function cutFirstLast(s) {
    let s1 = cutFirst(s)
    return cutLast(s1)
}
function keepFirst(s) {
    return s.slice(0, 2)
}
function keepLast(s) {
    return s.slice(-2)
}

function keepFirstLast(s) {
    if (s.length < 5) {
        return s
    }
    return keepFirst(s) + keepLast(s)
}
