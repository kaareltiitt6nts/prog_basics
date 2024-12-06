import { navigateTo } from "../router.js"
import { findProductById } from "../util.js"

export function displayFavorites(favorites) {
    const mainContainer = document.querySelector("#mainContainer")
    mainContainer.innerHTML = ""

    const favContainer = document.createElement("div")
    favContainer.id = "favContainer"
    favContainer.innerHTML = "<h1>Lemmikud</h1>"

    const favView = document.createElement("div")
    favView.id = "favView"

    mainContainer.append(favContainer)
    favContainer.append(favView)

    favorites.forEach(productId => {
        let product = findProductById(productId)

        let productCard = document.createElement("div")
        productCard.id = "productCard"

        productCard.innerHTML = `
            <h1>${product.name}</h1>
            <p>Hind: ${product.price}</p>
            <p>Kategooria: ${product.category}</p>
        `

        productCard.addEventListener("click", () => {
            navigateTo("product", product)
        })

        favView.append(productCard)
    });
}