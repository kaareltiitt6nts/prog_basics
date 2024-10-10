// Math, funktsioonid

/* 
round -> ümardab lähima täisarvuni
floor -> tagastab lähima väiksema täisarvu
ceil -> tagastab lähima suurema täisarvu
trunc -> eemaldab komakohad

*/

//let rand = Math.random(); // [0-1)
//let rand = Math.random() * 6; // [0-6)

function random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

const rngButton = document.querySelector("#rngbutton");
const rngResult = document.querySelector("#rngresult");
rngButton.addEventListener("click", () => {
    var min = parseInt(document.querySelector("#rngmin").value);
    var max = parseInt(document.querySelector("#rngmax").value);

    var result = random(min, max);
    rngResult.textContent = result;

    rngResult.classList.remove("spin");
    void rngResult.offsetWidth;
    rngResult.classList.add("spin");
});

// 3 === sama väärtus ning andmetüüp
// 2 == sama väärtus

// ülesanne: sisestatud on number või string (kontrollida)
// põhikool 7-16, gümn 17-20, täis 20+

// let age = prompt("Vanus?");

// if (!isNaN(age)) {
//     if (age >= 7 && age < 17) { // [7; 17)
//         console.log("Lähed sööma kell 11.");
//     }
//     else if (age >= 17 && age < 20) { // [17; 20)
//         console.log("Lähed sööma kell 14.");
//     }
//     else { // [20; inf)
//         console.log("Lähed sööma peale tööpäeva. Nüüd ruttu-ruttu tagasi tööle!");
//     }
// }
// else {
//     console.log("Esitati vanus, mis ei ole number.");
// }

function calc(a, b, type) {
    switch(type) {
        case("a"):
            return result = a + b;
        case("s"):
            return result = a - b;
        case("m"):
            return result = a * b;
        case("d"):
            return result = a / b;
        case("e"):
            return result = Math.pow(a, b);
        case("r"):
            return result = a % b;
        default:
            return result = null;
    }
}

let a = parseFloat(prompt("a?"));
let b = parseFloat(prompt("b?"));
let type = prompt("milline tehe? [a/s/m/d/e/r]")

if (!isNaN(a) && !isNaN(b)) {
    let result = calc(a, b, type);
    console.log(result);
}