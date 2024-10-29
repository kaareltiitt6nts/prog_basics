function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32
}

function fahrenheitToCelsius(f) {
    return (f - 32) * 5/9
}

let celsius = 32
let fahrenheit = celsiusToFahrenheit(celsius)
let fahrenheitToCel = fahrenheitToCelsius(fahrenheit)

console.log(celsius, fahrenheit, fahrenheitToCel)