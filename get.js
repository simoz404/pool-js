function get(src, path) {
    let s = path.split('.')
    if (s.length === 1) {
        return src[s[0]]
    } else if (s.length === 2) {
        if (src[s[0]] === undefined) {
            return undefined
        }
        return src[s[0]][s[1]]
    } else if (s.length === 3) {
        if (src[s[0]] === undefined) {
            return undefined
        }
        return src[s[0]][s[1]][s[2]]
    } else if (s.length === 4) {
        if (src[s[0]] === undefined) {
            return undefined
        }
        return src[s[0]][s[1]][s[2]][s[3]]
    }
    return undefined
}
