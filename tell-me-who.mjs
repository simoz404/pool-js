import { readdir } from 'node:fs/promises';
let dir = process.argv[2]
let files = await readdir(dir)
let newar = []
files.forEach(file => {
    let s = file.slice(0, file.indexOf('.json')).split('_')
    newar.push(s[1]+' '+s[0])    
})
newar.sort()
let i = 1
newar.forEach((arr) => {
    console.log(`${i}. ${arr}`)
    i++
})
