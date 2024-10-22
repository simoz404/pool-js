function isLeapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
}
function dayOfTheYear(date) {
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let dayoftheyear = day
    for (let i = 0; i < month; i++) {
        dayoftheyear += daysInMonth[i]
    }

    return dayoftheyear

}