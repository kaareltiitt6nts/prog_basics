const books = ["War and Peace", "The Great Gatsby", "Moby Dick", "To Kill a Mockingbird", "Pride and Prejudice"]
const temperatures = [12, 21, 19, 22, 20, 17, 16]

// RAAMATUD
// raamatute kogus
console.log(books.length)

// lyhim raamat
console.log(books.reduce((a, b) => {
    return a.length < b.length ? a : b
}))

// raamatud t2hestikulises j2rjekorras
console.log(books.sort())

// raamatu olemasolu kontrollimine
let bookToFind = "The Great Gatsby"
console.log(books.includes(bookToFind))

// TEMPERATUURID
// temperatuuri filter
console.log(temperatures.filter(temp => {
    return temp < 20
}))

// keskmine temperatuur
let sum = temperatures.reduce((a, b) => {
    return a + b
})
let avgTemp = sum/temperatures.length
console.log(avgTemp)

// teisendamine fahrenheiti
let tempF = []
temperatures.forEach(temp => {
    fahrenheit = temp * 9/5 + 32
    tempF.push(fahrenheit)
})
console.log(tempF)

// sorteerimine kahanevas j2rjekorras
console.log(temperatures.sort((a, b) => {
    return a > b
}))