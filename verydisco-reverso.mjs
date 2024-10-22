import { readFile } from 'node:fs/promises';
let filename = process.argv[2]
let word = await readFile(filename, 'utf-8')
let s1 = ''
let s2 = ''
let sp = word.split(' ')
let newsp = []
sp.forEach(elem => {
    if (elem.length%2 === 0) {
        s1 = elem.slice(0, elem.length/2)
        s2 = elem.slice((elem.length/2))
    } else {
        s1 = elem.slice(0,(elem.length/2))
        s2 = elem.slice((elem.length/2))
    }
    newsp.push(s2+s1)
});
console.log(newsp.join(' '));
