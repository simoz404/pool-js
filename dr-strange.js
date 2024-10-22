var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
function addWeek(s) {
    var s1 = s + ''
    let d = s1.split(' ')
    console.log();
    if ((d[2] > 7 && d[2] <= 14 )|| (d[2] > 21 && d[2] <= 28)) {
        return 'second'+days[s.getDay()]
    }
    return days[s.getDay()]
}

console.log(addWeek(new Date('0001-01-08')));
function timeTravel(s) {
    return days[s.date.getDay()]
}
// addWeek(new Date('0001-01-01'))
// console.log(timeTravel({
//     date: new Date('2020-05-29 23:25:22'),
//     hour: 21,
//     minute: 22,
//     second: 22,
//   }).toString());