function interpolation(o) {
    let i = 0
    let x = o.start
    let y = 0
    let stepx = (o.end-o.start)/o.step
    let stepy = o.duration/o.step
    setInterval(() => {
        if (i == o.step) {
            return
        }
        y += stepy
        o.callback([x, y])
        x += stepx
        i++
    },o.duration/o.step)
    
}