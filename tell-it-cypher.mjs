import { readFile } from "fs/promises";
import { buffer } from "stream/consumers";
import { writeFile } from "fs/promises";
import { exit } from "process";

let file = process.argv[2]
let word = process.argv[3]
let filename = process.argv[4]
let content = await readFile(file, 'utf8')
let name = ''
if (filename) {
    name = filename
}
if (word === 'encode') {
    if (!name) {
        name = 'cypher.txt'
    }
    let c = Buffer.from(content).toString('base64')
    writeFile(name, c)
} else if (word === 'decode') {    
    if (!name) {
        name = 'clear.txt'
    }    
    let c = Buffer.from(content, 'base64').toString()    
    writeFile(name, c)
} else {
    exit()
}