function randInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min
}

const maxGuesses = 20
let guesses = []
let isGuessed = false

const min = 1
const max = 5
const answer = randInt(min, max)

let DEBUG = true
if (DEBUG) {
    console.log(`Answer: ${answer}`)
}

let guessInfo = "Guess an integer."

do {
    let gameInfo = `Attempt: ${guesses.length}/${maxGuesses} | Min: ${min} | Max ${max}`
    let guess = prompt(`${guessInfo} ${gameInfo}`)

    if (!isNaN(guess)) {
        guesses.push(guess)

        if (guess == answer) {
            console.log(`Congratulations! The answer was ${answer}. You guessed ${guesses.length} times.`)
            isGuessed = true
        }
        else if (guess > answer) {
            guessInfo = "Answer is lower."
            console.log(`${guess} is wrong! The answer is lower!`)
        }
        else if (guess < answer) {
            guessInfo = "Answer is higher."
            console.log(`${guess} is wrong! The answer is higher!`)
        }
    }
    else {
        console.log("Guess wasn't a number.")
    }
}
while (!isGuessed && guesses.length < maxGuesses)

console.log(guesses)