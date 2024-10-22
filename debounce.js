function debounce(f, wait) {
    let timer;
    return function(...arg) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            f(...arg)
        }, wait)
    }
}

function opDebounce(f, wait, obj = {}) {
    let timer;
    return function(...arg) {
        if (obj.leading) {
            f(...arg)
            obj.leading = false
        }
        clearTimeout(timer)
        timer = setTimeout(() => {
            f(...arg)
        }, wait)
    }
}