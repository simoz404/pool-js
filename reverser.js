function reverse(s) {
    let str = []
    for (let i = s.length-1; i >= 0; i--) {
        str.push(s[i])
    }
    if (typeof(s) === 'string') {
        return str.join('')
    }
    return str
}