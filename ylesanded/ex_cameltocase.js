// broken

function isOppositeCase(string1, string2) {
    return isUppercase(string1) != isUppercase(string2)
}

function isUppercase(string) {
    return string.toUpperCase() === string
}

function getWords(string) {
    let words = []
    let lastWordStartIndex = 0
    let lastCaseIsUpper = false

    for (i = 0; i < string.length; i++) {
        lastCaseIsUpper = false
        if (isUppercase(string[i]) || lastCaseIsUpper) { // kui on uppercase, siis algab s6na
            lastCaseIsUpper = true
            
            if (!isUppercase(string[i]) && lastCaseIsUpper) {
                lastCaseIsUpper = false
                words.push(string.slice(lastWordStartIndex, i - 1))
                continue;
            }

            words.push(string.slice(lastWordStartIndex, i))
            lastWordStartIndex = i
        }
    }

    return words
}

function camelToCase(string) {
    let words = getWords(string)
}

console.log(getWords("htmlTestSTRING"))
console.log(getWords("htmlTestSTRING"))