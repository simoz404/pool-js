function hasCity(country, arr) {
    return function(city) {
        for (let i = 0; i < arr.length; i++) {
            if (city === arr[i]) {
                return city+" is a city from "+country
            }
        }
        return city+" is not a city from "+country
      }
}