import { PRODUCT_CATEGORIES } from "../globaldata.js"
import { navigateTo } from "../router.js"
import { getFormattedPrice } from "../util.js"

export function createProductCard(product) {
    let productCard = document.createElement("div")
    productCard.id = "productCard"

    const isDiscounted = product.discount > 0
    const priceHtml = isDiscounted ?
      `<span class="oldPrice">${getFormattedPrice(product.price)}</span> <span class="salePrice">${getFormattedPrice(product.finalPrice)}</span>`
    : `${getFormattedPrice(product.finalPrice)}`

    productCard.innerHTML = `
        <h1>${product.name}</h1>
        <p id="price">${priceHtml}</p>
        <p>${PRODUCT_CATEGORIES[product.category]}</p>
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