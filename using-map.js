function citiesOnly(s) {
    return s.map((v) => v.city) 
}

function upperCasingStates(arr) {
    let narr = arr.map((v) => {
        if (/\s/.test(v)) {
            return v.split(' ').map((v1) => v1[0].toUpperCase() + v1.slice(1)).join(' ');
        }
        return v[0].toUpperCase() + v.slice(1);
    });
    return narr;
}

function fahrenheitToCelsius(fah) {
    const ce = fah.map((v) => {
        return Math.floor((parseFloat(v) - 32) * (5/9)) + '°C';
    });
    return ce
}

function trimTemp(arr) {
    return arr.map((v) => {
        return {
            city: v.city,
            state: v.state,
            region: v.region,
            temperature: parseInt(v.temperature)+'°F'
        };
    });
}

function tempForecasts(arr) {
    return arr.map((v) => {
        return (Math.floor((parseFloat(v.temperature) - 32) * (5/9)) + '°Celsius in ') + v.city + ', ' + upperCasingStates([v.state]).join('')
    })
}