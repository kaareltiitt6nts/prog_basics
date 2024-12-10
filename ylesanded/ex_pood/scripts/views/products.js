import { navigateTo } from "../router.js"
import { getFormattedPrice } from "../util.js"

export function createProductCard(product) {
    let productCard = document.createElement("div")
    productCard.id = "productCard"

    productCard.innerHTML = `
        <h1>${product.name}</h1>
        <p>Hind: ${getFormattedPrice(product.price)}</p>
        <p>Kategooria: ${product.category}</p>
    `

    productCard.addEventListener("click", () => {
        navigateTo("product", product)
    })

    return productCard
}

export function displayProducts(products) {
    const mainContainer = document.querySelector("#mainContainer")
    mainContainer.innerHTML = ""

    const productsContainer = document.createElement("div")
    productsContainer.id = "productsContainer"
    productsContainer.innerHTML = "<h1>Tooted</h1>"

    const productsView = document.createElement("div")
    productsView.id = "productsView"

    mainContainer.append(productsContainer)
    productsContainer.append(productsView)

    products.forEach(product => {
        productsView.append(createProductCard(product))
    });
}