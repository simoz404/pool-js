var vowels = /[aeio]/gi
function vowelDots(s) {
    let str = ''
    for (let i = 0; i < s.length; i++) {
       if (vowels.test(s[i])) {
        str = str + s[i] + '.'
       } else {
        str += s[i]
       }
    }
    return str
}
