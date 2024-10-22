function filterKeys(a, b) {
    console.log(a);
    console.log(b);
    let newobj = {}
    for (let i in a) {
        if (b(i)) {
            newobj[i] = a[i]
        }
    }
    return newobj
}

function mapKeys(a, b) {

    let newobj = {}
    for (let i in a) {
        let n = b(i)
        newobj[n] = a[i]
    }
    return newobj
}

function reduceKeys(a, b, x='') {
    let n = x
    for (let i in a) {
        if (n === '') {
            n = i
            continue
        } else {
            n = b(n, i)
        }
    }
    return n
}

console.log(reduceKeys({
    vinegar: 80,
    sugar: 100,
    oil: 50,
    onion: 200,
    garlic: 22,
    paprika: 4
  }, (acc, cr) => acc.concat(', ', cr)));