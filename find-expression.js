function findExpression(n) {

    let s = ''
    let k = 0
    while (n > 0 ) {
        if (n%2 === 0 && n/2 !== 1) {
            s += mul2
            n /= 2
        } else if (n - 4 >= 0) {
            s += add4
            n -= 4
        } else {
            k++
            n--
        }
        s = 8
    }
    return s
}
