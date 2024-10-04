// Math, funktsioonid

/* 
round -> ümardab lähima täisarvuni
floor -> tagastab lähima väiksema täisarvu
ceil -> tagastab lähima suurema täisarvu
trunc -> eemaldab komakohad

*/

//let rand = Math.random(); // [0-1)
//let rand = Math.random() * 6; // [0-6)

let min = 0;
let max = 6;
let result = Math.floor(Math.random() * (max - min)) + 1;
console.log(result);