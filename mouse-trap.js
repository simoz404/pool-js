let lastCircle
let box = null
let isTrapped = false

export function createCircle() {
    document.addEventListener('click', function (mouse) {
        const div = document.createElement('div')
        div.className = 'circle'
        div.style.background = 'white'
        div.style.left = (mouse.clientX - 25) + 'px'
        div.style.top = (mouse.clientY - 25) + 'px'
        document.body.appendChild(div)
        lastCircle = div
        isTrapped = false
    })
}

export function moveCircle() {
    document.addEventListener('mousemove', function (mouse) {
        if (!lastCircle || !box) return

        const boxRect = box.getBoundingClientRect()

        let newLeft = mouse.clientX - 25
        let newTop = mouse.clientY - 25

        const insideBox =
            newLeft > boxRect.left &&
            newTop > boxRect.top &&
            newLeft + 50 < boxRect.right &&
            newTop + 50 < boxRect.bottom

        if (insideBox) {
            isTrapped = true 
        }
        if (isTrapped) {
            if (newLeft < boxRect.left) newLeft = boxRect.left
            if (newLeft > boxRect.right - 50) newLeft = boxRect.right - 50
            if (newTop < boxRect.top) newTop = boxRect.top
            if (newTop > boxRect.bottom - 50) newTop = boxRect.bottom - 50
        }
        lastCircle.style.left = newLeft + 'px'
        lastCircle.style.top = newTop + 'px'

        if (insideBox) {
            lastCircle.style.background = 'var(--purple)'
        }
    })
}

export function setBox() {
    const w = document.documentElement.clientWidth
    const h = document.documentElement.clientHeight

    box = document.createElement('div')
    box.className = 'box'

    document.body.appendChild(box)
    const boxRect = box.getBoundingClientRect()
    box.style.left = (w - boxRect.width) / 2 + 'px'
    box.style.top = (h - boxRect.height) / 2 + 'px'
}