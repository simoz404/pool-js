import { styles } from './pimp-my-style.data.js'
let count = 0
let count2 = styles.length-1
export function pimp() {
    const clas = document.querySelector(".button");
    if (count < styles.length) {
        clas.classList.add(styles[count])
        count++
        if (count === styles.length) {
            clas.classList.add('unpimp')
            count2 = styles.length
        }
    } 
    if (count === styles.length) {
        clas.classList.remove(styles[count2])
        count2--
        if (count2 < 0) {
            clas.classList.remove('unpimp')
            count = 0
        }
    }
}