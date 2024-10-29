let shoppingCart = [
    {
        name: "apple",
        quantity: 4
    },
    {
        name: "banana",
        quantity: 2
    },
    {
        name: "orange",
        quantity: 5
    },
    {
        name: "milk",
        quantity: 1
    },
    {
        name: "bread",
        quantity: 2
    }
]

function createElement(name, quantity) {
    let element = {
        name: name,
        quantity: quantity
    }
    shoppingCart.push(element)
    return element
}

function findByName(name) {
    return shoppingCart.find(el => el["name"] == name)
}

function findByKeyValue(key, value) {
    return shoppingCart.find(el => el[key] == value)
}

function findOrCreate(name) {
    let element = findByName(name)
    if (element === undefined) {
        element = createElement(name, 0)
    }

    return element
}

function removeByName(name) {
    let element = findByName(name)
    if (element != undefined) {
        shoppingCart.splice(shoppingCart.indexOf(element), 1)
        return true
    }

    return false
}

function incrementKey(name, key, amount) {
    let element = findOrCreate(name)
    if (element != undefined && element[key] && !isNaN(amount)) {
        element[key] += amount
        return element[key]
    }
}

function getAllKeyValues(key) {
    let keys = []
    shoppingCart.forEach(element => {
        keys.push(element[key])
    });
    return keys
}

function hasKeyValue(key, value) {
    let exists = findByKeyValue(key, value)
    if (exists) {
        return true
    }

    return false
}

function getTotalCount() {
    return shoppingCart.reduce((acc, item) => {return acc + item.quantity}, 0)
}

console.log(shoppingCart)

let totalCount = getTotalCount()
console.log(totalCount)

let newElement = createElement("yogurt", 3)
console.log(findByName(newElement.name))

// old value: 4
let newValue = incrementKey("apple", "quantity", 3)
console.log(newValue) // 7

let wasRemoved = removeByName("banana")
console.log(`banana was removed: ${wasRemoved}`)

let ingredients = getAllKeyValues("name")
console.log(ingredients)

let hasMilk = hasKeyValue("name", "milk")
console.log(`has milk: ${hasMilk}`)

let sortedDescending = shoppingCart.sort((a, b) => {
    return a.quantity < b.quantity
})
console.log(sortedDescending)