import { writeFile } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
import { readdir } from 'node:fs/promises';

let dir = process.argv[2]
let files = await readdir(dir)
let yesName = []
for (let v of files) {
    let content = await readFile(`${dir}/${v}`, 'utf-8')
    if (content.includes('yes')) {
        yesName.push(v)
    }
}
let newar = []
yesName.forEach(file => {
    let s = file.slice(0, file.indexOf('.json')).split('_')
    newar.push(s[1]+' '+s[0])    
})

newar.sort()
let i = 1
let s = []
newar.forEach((arr) => {
    s.push(`${i}. ${arr}`)
    i++
})
writeFile('vip.txt', s.join('\n'))