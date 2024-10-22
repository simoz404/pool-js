function triangle(s, n) {
    let str = ''
    for (let i = 0; i < n; i++) {
        let m = i+1
        for (let j = 0; j < m; j++) {
            str += s
        }

        if (i !== n-1) {
            str += '\n'
        }
    }
    return str
}

