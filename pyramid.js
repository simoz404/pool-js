function pyramid(s, n) {
    let str = ''
    let m = 1
    let k = 2
    let sp = ' '
    let rep = (s.length*n)-s.length
    for (let i = 0; i < n; i++) {
        k++
        for (let j = 0; j < m; j++) {
            if (j === 0) {
            str += sp.repeat(rep)
            }
            str += s
        }
        m = i+k
        rep-=s.length
        if (i !== n-1) {
            str += '\n'
        }
    }
    return str
}