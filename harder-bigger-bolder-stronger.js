export function generateLetters() {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < 120; i++) {
        let newdiv = document.createElement('div')
        newdiv.style.fontSize = 11+i+"px"
        if (i < 40) {
            newdiv.style.fontWeight = '300'
        } else if (i < 80) {
            newdiv.style.fontWeight = '400'
        } else {
            newdiv.style.fontWeight = '600'
        }
        newdiv.textContent = alpha[Math.floor(Math.random() * alpha.length)]
        document.body.appendChild(newdiv)

    }
}