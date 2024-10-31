const USERS = [
    {
        name: "John",
        age: 25
    },
    {
        name: "Jasper",
        age: 13
    },
    {
        name: "Alice",
        age: 30
    },
    {
        name: "Bob",
        age: 20
    },
    {
        name: "Jane",
        age: 35
    },
    {
        name: "Tom",
        age: 40
    },
    {
        name: "Sara",
        age: 29
    },
    {
        name: "Marten",
        age: 15
    }
]

const ADULT_AGE = 18

function getUsersByKeyValue(key, value) {
    return USERS.filter(user => {
        return user[key] === value
    })
}

function isOlderThan(user, age) {
    return user.age > age
}

function logUser(user) {
    console.log(user.name, user.isAdult)
}

let userTemplate
let userListContainer
let userList

document.addEventListener("DOMContentLoaded", () => {
    userTemplate = document.querySelector("#userTemplate")
    userContainerElement = document.querySelector("#userListContainer")
    userList = document.querySelector("#userList")

    // t2iskasvanu property lisamine
    USERS.map(user => {
        user.isAdult = user.age > ADULT_AGE
    })

    // iga kasutaja listi element
    USERS.forEach(element => {
        let newElement = userTemplate.content.cloneNode(true)

        let nameField = newElement.querySelector("#userName")
        let isAdultField = newElement.querySelector("#isAdult")
        let adultText = element.isAdult ? "Täiskasvanu" : "Alaealine"

        nameField.textContent = element.name
        isAdultField.textContent = adultText
        isAdultField.classList.add("hidden")

        nameField.addEventListener("click", () => {
            isAdultField.classList.toggle("hidden")
        })

        userContainerElement.appendChild(newElement)
    });
})

