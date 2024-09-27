let person = {
    name: "Kaarel",
    age: 20
};
console.log(person); // person
console.log(person.name); // Kaarel

let selection = "name";
console.log(person[selection]); // Kaarel

let colors = ["Red", "Blue", "Green", "Yellow", "Pink"];
console.log(colors[3]); // Yellow
console.log(colors.length) // 5

let numbers = [5, 4, 3, 2, 1, 0, -1, -2, -3];
numbers.sort((a, b) => {
    return a - b;
});
console.log(numbers); // -3 -> 5

// Exercise: Addition Calculator
function beginPrompt() {
    // A ja B vaartused
    let firstValue = parseFloat(prompt("Muutuja a?"));
    let secondValue = parseFloat(prompt("Muutuja b?"));

    // Kui esitatakse mittesobiv vaartus, siis tehet ei tee
    if (!firstValue || !secondValue) {
        console.log("Arvutamisel tekkis viga.");
        return;
    };

    // Vastuse elemendi leidmine
    let paragraph = document.getElementById("promptResult");
    // Vastuse arvutamine ning kuvamine lehel
    paragraph.textContent = firstValue + secondValue;
};

const beginButton = document.getElementById("beginPrompt");
beginButton.addEventListener("click", beginPrompt);