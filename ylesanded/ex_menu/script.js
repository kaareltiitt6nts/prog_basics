// hinnad võetud keskmisest tallinna burgeriputkast, eurodes
const FOOD_MENU = [
    {
        name: "Friikartulid",
        price: 12,
        category: "starter"
    },
    {
        name: "Friikartulid viineriga (1)",
        price: 15,
        category: "starter"
    },
    {
        name: "Friikartulid viineriga (3)",
        price: 21,
        category: "starter"
    },
    {
        name: "Juustuburger",
        price: 15,
        category: "main"
    },
    {
        name: "Grillburger",
        price: 18,
        category: "main"
    },
    {
        name: "Peekoniburger",
        price: 25,
        category: "main"
    },
    {
        name: "Jäätis",
        price: 9,
        category: "dessert"
    },
    {
        name: "Jäätis kirsiga",
        price: 13,
        category: "dessert"
    },
    {
        name: "Šokolaad",
        price: 6,
        category: "dessert"
    },
    {
        name: "Pulgakomm",
        price: 4,
        category: "dessert"
    }
]

function getCheap() {
    return FOOD_MENU.filter(el => {
        return el.price < 10
    })
}
console.log(getCheap())

function getCheapNames() {
    return getCheap().map(item => item.name)
}
console.log(getCheapNames())

function logNamePrice() {
    FOOD_MENU.forEach(el => {
        console.log(el.name, el.price)
    });
}
//logNamePrice()

function getCheapTotalPrice() {
    return getCheap().reduce((acc, el) => {
        return acc + el.price
    }, 0)
}
console.log(getCheapTotalPrice())

function getCheapAndTotal() {
    return {
        cheapItems: getCheap(),
        totalCost: getCheapTotalPrice()
    }
}
console.log(getCheapAndTotal())

function filterByKeyValue(key, value) {
    return FOOD_MENU.filter(el => {
        return el[key] == value
    })
}
console.log(filterByKeyValue("category", "dessert"))

document.addEventListener("DOMContentLoaded", () => {
    const MENU_ITEM_TEMPLATE = document.querySelector("#menuitem_template").content
    const MENU_STARTER = document.querySelector("#menustarter")
    const MENU_MAIN = document.querySelector("#menumain")
    const MENU_DESSERT = document.querySelector("#menudessert")

    const ITEMS_STARTER = filterByKeyValue("category", "starter")
    ITEMS_STARTER.forEach(item => {
        const ITEM = MENU_STARTER.appendChild(document.importNode(MENU_ITEM_TEMPLATE, true))

        let name = ITEM.querySelector("#name")
        let price = ITEM.querySelector("#price")

        name.innerHTML = item.name
        price.innerHTML = item.price
    });
})

