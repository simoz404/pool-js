function sign(n) {
    if (n > 0) {
        return 1
    } else if (n < 0 ) {
        return -1
    } else {
     return 0   
    }
}

function sameSign(a, b) {
    if (a < 0 && b < 0) {
        return true
    } else if (a > 0 && b > 0) {
        return true
    } else if (a == 0 && b == 0) {
        return true
    } else {
        return false
    }
}