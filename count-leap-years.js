function isLeapYear(date) {
    return (date % 4 === 0 && date % 100 !== 0) || (date % 400 === 0);
}
function countLeapYears(date) {
    let n = 0
    let y = date.getFullYear()
    for (let i = 1; i <= y; i++) {
        if (isLeapYear(i)) {
            n++
        }
    }
    if (n !== 0) {
        n -= 1
    }
    return n
}

