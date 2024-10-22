function round(n) {
    if (n === 0) {
        return 0
    }
    if (n > 0 && n+0.5 < parse(n)+1) {
        return parse(n)
    } else if (n < 0 && n-0.5 < parse(n)-1){
        return parse(n-1)
    } else if (n < 0) {
        return parse(n)
    }
   return parse(n+1)
}


function ceil(n) {
    if (n === 0) {
        return 0
    }
    if (n < 0) {
        return parse(n)
    }

    return parse(n+1)
}

function floor(n) {
    if ((n > 0))  {
        return parse(n)
    }
    if (n < parse(n-0.1)) {
        return parse(n-1)
    }
    return n
}

function trunc(n) {
    return parse(n)
}
function parse(n) {
    let s = 1
    if (n < 0) {
        n = -n
        s = -1
    }
    let t = n
    let c = 0
    while (t > 0) {
        t /= 10
        c++
    }
    t = n
    while (c >= 0) {
        let num = Math.pow(10, c)
        while (t > num) {
            t -= num
        }
        c--
    }
    return (n-t)*s;
}

