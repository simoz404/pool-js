function throttle(f, wait) {
    let timer;
    return function(...arg) {
        if (timer == null) {
            f(...arg);
            timer = setTimeout(() => {
                timer = null;
            }, wait);
        }
    };
}

function opThrottle(f, wait, o = {}) {
    let last = 0
    let timer = null
    return function (...args) {
        const now = +new Date()

        if (!last && !o.leading) {
            last = now
        }

        if (now - last > wait) {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
            f.apply(this, args)
            last = now
        } else if (!timer && o.trailing) {
            timer = setTimeout(() => {
                f.apply(this, args)
                last = +new Date()
                timer = null
            }, wait)
        }
    }
}

function logMessage() {
    console.log('Function executed at:', new Date().toLocaleTimeString())
}
const throttledLogMessage = opThrottle(logMessage, 2000, { trailing: true });

setTimeout(throttledLogMessage, 0);