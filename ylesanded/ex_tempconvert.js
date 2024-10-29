function convertTemperature(temp, from, to) {
    let celsius;

    switch(from) {
        case "C":
            celsius = temp;
            break
        case "F":
            celsius = (temp - 32) * 5/9
            break
        case "K":
            celsius = temp - 273.15
            break
        default:
            console.log("invalid conversion")
            return undefined
    }

    switch(to) {
        case "C":
            return celsius
        case "F":
            return celsius * 9/5 + 32
        case "K":
            return celsius + 273.15
        default:
            console.log("invalid conversion")
            return undefined
    }
}

let result

do{
    let temp = parseFloat(prompt("Sisesta temperatuur"))

    if (!isNaN(temp)) {
        let from = prompt("Millisest süsteemist? [C/F/K]").toUpperCase()
        let to = prompt("Millisesse süsteemi? [C/F/K]").toUpperCase()

        if (from === "" || to === "") break;
        
        result = convertTemperature(temp, from, to)
    }
}
while(isNaN(result))

console.log(result)