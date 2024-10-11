// ülesanne: sisestatud on number või string (kontrollida)
// põhikool 7-16, gümn 17-20, täis 20+

function checkAge() {
    let age = prompt("Vanus?");

    if (!isNaN(age) && age >= 0) {
        if (age < 7) { // (0; 7)
            console.log("Sina süüa ei saa.")   
        }
        else if (age >= 7 && age < 17) { // [7; 17)
            console.log("Lähed sööma kell 11.");
        }
        else if (age >= 17 && age < 20) { // [17; 20)
            console.log("Lähed sööma kell 14.");
        }
        else { // [20; inf)
            console.log("Lähed sööma peale tööpäeva. Nüüd ruttu-ruttu tagasi tööle!");
        }
    }
    else {
        checkAge();
        console.log("Esitati vigane vanus.");
    }
}

checkAge();

/*
// ternary
let printString = age >= 18 ? "täiesaline" : "laps";
console.log(printString);

let purchaseAmount = 125;
let discountPercent = 10;
let discountMinAmount = 100;
let finalPrice = purchaseAmount > discountMinAmount ? purchaseAmount - (purchaseAmount * discountPercent/100) : purchaseAmount;
console.log(`Lõpphind on ${finalPrice}`);

let phoneNumber = "123-4567"
phoneNumber = phoneNumber.replaceAll("-", "")
console.log(phoneNumber)
*/

let score = 76;
switch(true) { // vaartuste kontrollimisel ei tohiks switchi kasutada
    case (score >= 95):
        console.log(5);
        break;
    case (score >= 75):
        console.log(4);
        break;
    case (score >= 50):
        console.log(3);
        break;
    case (score < 50 && score > 0):
        console.log(2);
        break;
    case (score <= 0):
        console.log(1);
        break;
    default:
        console.log("Midagi on nihu.");
        break;
}

// method chaining
let username = prompt("Enter your username.");

// with chaining
usernameChained = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase()
console.log(usernameChained);

// no chaining
username = username.trim();

let firstLetter = username.charAt(0);
firstLetter = firstLetter.toUpperCase();

let extraLetters = username.slice(1);
extraLetters = extraLetters.toLowerCase();

username = firstLetter + extraLetters

console.log(username);

