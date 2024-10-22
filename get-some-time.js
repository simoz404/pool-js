function firstDayWeek(week_number, year) {
    let f1 = new Date(year, 0, 1);
    f1.setFullYear(year);
    let adjustment = (f1.getDay() === 0 ? 6 : f1.getDay() - 1); 
    f1.setDate(f1.getDate() - adjustment);
    let week = new Date(f1);
    week.setDate(week.getDate() + 7 * (week_number - 1));
    if (week.getFullYear() < year) {
        return '01-01-' + year;
    }
    return week.getDate().toString().padStart(2, '0') + '-' + 
           (week.getMonth() + 1).toString().padStart(2, '0') + '-' + 
           week.getFullYear().toString().padStart(4, '0');
}
