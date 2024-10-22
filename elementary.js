function multiply(a, b) {
    let n = 0
    let sign = false
    if (a < 0 && b > 0) {
        a = -a
        sign = true
    } else if (b < 0 && a > 0) {
        b=-b
        sign = true
    } else if (b < 0 && a < 0) {
        a = -a
        b = -b
    }
    for (let i = 0; i < b; i++) {
        n += a
    }
    if (sign) {
        return -n
    }
    return n
}
function divide(a, b) {
    let sign = false
    if (a < 0 && b > 0) {
        a = -a
        sign = true
    } else if (b < 0 && a > 0) {
        b=-b
        sign = true
    } else if (b < 0 && a < 0) {
        a = -a
        b = -b
    }
    if (a < b) {
        return 0
    }
    let n = 0
    while (a > 0) {
        a -= b
        n++
        if (b > a) {
            break
        }
    }
    if (sign) {
        return -n
    }
    return n
}
function modulo(a, b) {
    let sign = false
    if (a < 0 && b > 0) {
        sign = true
        a = -a
    } else if (b < 0 && a > 0) {
        b=-b
    } else if (b < 0 && a < 0) {
        sign = true
        a = -a
        b = -b
    }
    if (a < b) {
        let m = divide(a, b)
        return (a-multiply(m, a))
    }
    let n  = 0
    while (a > 0) {
        a -= b
        if (b > a) {
            n = a
            break
        }
    }
    if (sign) {
        return -n
    }
    return n
}
