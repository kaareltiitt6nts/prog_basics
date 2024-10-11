// kasutaja andmed
let age = 22;
let favFruit = "apple";

// muutujad
let ticketPrice = 25;
let childDiscountPercent = 10;

// kas kasutaja on täisealine
let isAdult = age >= 18 ? true : false;
if (isAdult) {
    console.log("Kasutaja on täisealine");
}
else {
    console.log("Kasutaja on alaealine");
}

// kas kasutaja lemmikvili eksisteerib
switch (favFruit) {
    case ("apple"):
        console.log("Kasutaja lemmikvili on õun.");
        break;
    case ("pear"):
        console.log("Kasutaja lemmikvili on pirn.");
        break;
    case ("orange"):
        console.log("Kasutaja lemmikvili on mandariin.");
        break;
    default:
        console.log("Kasutaja lemmikvilja ei leitud.")
        break;
}

// pileti hind täiskasavanule või alaealisele
let finalTicketPrice = isAdult ? ticketPrice - (ticketPrice * childDiscountPercent/100) : ticketPrice;
let adultString = isAdult ? "täiskasvanule" : "alaealisele";
console.log(`Pileti hind ${adultString} on ${finalTicketPrice}€`);