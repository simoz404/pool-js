import {colors} from './fifty-shades-of-cold.data.js'

export function generateClasses() {
    const style = document.createElement('style');
    const cssClasses = colors.map(color => `.${color} { background: ${color}; }`).join('\n');
  
    style.textContent = cssClasses;
    
    document.head.appendChild(style);

}

function isThere(color) {
    const coldColors = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];
    for (let i =0; i < coldColors.length; i++) {
        if (color.includes(coldColors[i])) {
            return true
        }
    }
    return false
}

export function generateColdShades() {
    colors.forEach(color => {
        if (isThere(color)) {
            const newdiv = document.createElement('div');
            newdiv.textContent = color;
            newdiv.className = color;
        document.body.appendChild(newdiv)
        }
    })
}

export function choseShade(color) {
    let all = document.querySelectorAll('div')
    for (let i = 0; i < all.length; i++) {
        all[i].style.background = color;
        all[i].className = color;
    }
}

