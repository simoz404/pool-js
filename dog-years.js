let n = 31557600
function dogYears(names, s) {
    if (names == 'earth') {
        let dy = n/7
        return +((s/dy).toFixed(2))
    } else if (names == 'mercury') {
        let dy = (n*0.2408467)/7
        return +((s/dy).toFixed(2))
    } else if (names == 'venus') {
        let dy = (n*0.61519726)/7
        return +((s/dy).toFixed(2))
    } else if (names == 'mars') {
        let dy = (n*1.8808158)/7
        return +((s/dy).toFixed(2))
    } else if (names == 'jupiter') {
        let dy = (n*11.862615)/7
        return +((s/dy).toFixed(2))
    } else if (names == 'saturn') {
        let dy = (n*29.447498)/7
        return +((s/dy).toFixed(2))
    } else if (names == 'uranus') {
        let dy = (n*84.016846)/7
        return +((s/dy).toFixed(2))
    } else if (names == 'neptune') {
        let dy = (n*164.79132)/7
        return +((s/dy).toFixed(2))
    }
}

