const FOOD_MENU = [
    {
        name: "Friikartulid",
        price: 12,
        category: "starter",
    },
    {
        name: "Friikartulid viineriga (1)",
        price: 15,
        category: "starter"
    },
    {
        name: "Friikartulid viineritega (3)",
        price: 21,
        category: "starter"
    },
    {
        name: "Caesari salat",
        price: 52,
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

function createMenuItem(parent, element, data) {
    let item = document.importNode(element, true)

    let name = item.querySelector("#name")
    let price = item.querySelector("#price")

    name.innerHTML = data.name
    price.innerHTML = data.price

    // fragment k2itub imelikult
    if (data.available === false) {
        name.classList.add("unavailable")
        price.classList.add("unavailable")
    }

    parent.appendChild(item)
}

document.addEventListener("DOMContentLoaded", () => {
    const MENU_ITEM_TEMPLATE = document.querySelector("#menuitem_template").content
    const MENU_STARTER = document.querySelector("#menustarter")
    const MENU_MAIN = document.querySelector("#menumain")
    const MENU_DESSERT = document.querySelector("#menudessert")

    const ITEMS_STARTER = filterByKeyValue("category", "starter")
    const ITEMS_MAIN = filterByKeyValue("category", "main")
    const ITEMS_DESSERT = filterByKeyValue("category", "dessert")

    ITEMS_STARTER.forEach(item => {
        createMenuItem(MENU_STARTER, MENU_ITEM_TEMPLATE, item)
    });

    ITEMS_MAIN.forEach(item => {
        createMenuItem(MENU_MAIN, MENU_ITEM_TEMPLATE, item)
    });

    ITEMS_DESSERT.forEach(item => {
        createMenuItem(MENU_DESSERT, MENU_ITEM_TEMPLATE, item)
    });
})

