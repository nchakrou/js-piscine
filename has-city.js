function hasCity(country, arr) {
    return function (city) {
        for (let c of arr) {
            if (c === city) {
                return `${city} is a city from ${country}`
            }

        }
        return `${city} is not a city from ${country}`
    }
}
