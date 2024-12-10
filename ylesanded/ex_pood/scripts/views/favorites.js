import { findProductById } from "../util.js"
import { createProductCard } from "./products.js"

export function displayFavorites(favorites) {
    const mainContainer = document.querySelector("#mainContainer")
    mainContainer.innerHTML = ""

    const favContainer = document.createElement("div")
    favContainer.id = "favContainer"
    favContainer.innerHTML = "<h1>Lemmikud</h1>"

    const favView = document.createElement("div")
    favView.id = "productsView"

    mainContainer.append(favContainer)
    favContainer.append(favView)

    favorites.forEach(productId => {
        favView.append(createProductCard(findProductById(productId)))
    });
}