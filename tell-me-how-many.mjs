import { readdir } from 'node:fs/promises';
let dir = process.argv[2]
let files = await readdir(dir)
console.log(files.length)