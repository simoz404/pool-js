function split(s, sep = '') {
    let str = []
    let s2  = ''
    if (sep === '') {
        for (let i = 0; i < s.length; i++) {
            str.push(s[i])
        }
        return str
    }
    for (let i = 0; i < s.length; i++) {
        if (s.substring(i, i+sep.length) === sep) {
            str.push(s2)
            s2 = ''
            i += sep.length-1
        } else {
            s2 += s[i]
        }
    }
    if (s2 !== null) {
        str.push(s2)
    }
    return str
}

function join(s, sep = '') {
    let str = ''
    for (let i = 0; i < s.length; i++) {
        str += s[i]
        if (i !== s.length-1) {
            str += sep
        }
    }
    return str
}
