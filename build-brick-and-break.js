export function build(arg) {
    for (let i = 1; i <= arg; i++) {
        setTimeout(() => {
        const newDiv = document.createElement("div")
        newDiv.id = 'brick-'+i
        newDiv.textContent = i
        if (i%3 === 2) {
            newDiv.dataset.foundation = 'true'
        }
        document.body.appendChild(newDiv)
        }, i*100)
    }
}

export function repair(...ids) {
    for (let i = 0; i < ids.length; i++) {
        let element = document.getElementById(ids[i]);
        if (element.dataset.foundation === 'true') {
            element.dataset.repaired = 'in progress'
        } else {
            element.dataset.repaired = 'true'
        }
    }
}

export function destroy() {
    const element = document.getElementsByTagName("div");
    element[element.length-1].remove()
}