function sameAmount(s, rr1, rr2) {
    let r1 = new RegExp(rr1, 'g')
    let r2 = new RegExp(rr2, 'g')
    let m1 = s.match(r1)
    let m2 = s.match(r2)
    if (m1 !== null && m2 !== null && m1.length === m2.length) {
        return true
    }
    return false
}