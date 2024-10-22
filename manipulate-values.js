function filterValues(a, b) {
    let newobj = {}
    for (let i in a) {
        if (b(a[i])) {
            newobj[i] = a[i]
        }
    }
    return newobj
}

function mapValues(a, b) {
    let newobj = {}
    for (let i in a) {
        let n = b(a[i])
        newobj[i] = n
    }
    return newobj
}

function reduceValues(a, b, x=0) {
    let n = 0
    for (let i in a) {
        n = b(n, a[i])
    }
    return n+x
}

