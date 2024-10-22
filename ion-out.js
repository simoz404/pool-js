function ionOut(s) {
    let exp = /[a-z]*[t](?=ion)/g
    if (s.match(exp) === null) {
        return []
    }
    return s.match(exp)
}
