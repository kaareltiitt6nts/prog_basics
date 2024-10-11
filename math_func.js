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

// function calc(a, b, type) {
//     switch(type) {
//         case("a"):
//             return a + b;
//         case("s"):
//             return a - b;
//         case("m"):
//             return a * b;
//         case("d"):
//             return a / b;
//         case("e"):
//             return Math.pow(a, b);
//         case("r"):
//             return a % b;
//         default:
//             console.log("Arvutamisel tekkis viga.");
//             return null;
//     }
// }

// let a = parseFloat(prompt("a?"));
// let b = parseFloat(prompt("b?"));
// let type = prompt("milline tehe? [a/s/m/d/e/r]")

// if (!isNaN(a) && !isNaN(b)) {
//     let result = calc(a, b, type);
//     console.log(result);
// }