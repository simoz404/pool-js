function isValid(date) {     
    return (date instanceof Date && !isNaN(date.getTime())) || 
           (typeof date === "number" && !isNaN(date))
}

function isAfter(date1, date2) {     
    return isValid(date1) && isValid(date2) && date2 < date1  
}   

function isBefore(date1, date2) {     
    return isValid(date1) && isValid(date2) && date2 > date1 
}   

function isFuture(date) {     
    return isValid(date) &&  new Date() < date
}   

function isPast(date) {     
    return isValid(date) &&  new Date() > date
}