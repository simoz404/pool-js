const word = process.argv[2]
let s1 = ''
let s2 = ''
let sp = word.split(' ')
let newsp = []
sp.forEach(elem => {
    if (elem.length%2 === 0) {
        s1 = elem.slice(0, elem.length/2)
        s2 = elem.slice((elem.length/2))
    } else {
        s1 = elem.slice(0,(elem.length/2)+1)
        s2 = elem.slice((elem.length/2)+1)
    }
    newsp.push(s2+s1)
});
console.log(newsp.join(' '));

