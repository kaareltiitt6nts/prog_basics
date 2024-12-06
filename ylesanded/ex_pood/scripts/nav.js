// imelik!!!!!!!

// router
import { cart } from "./constructors/cart.js"
import { products } from "./constructors/product.js"
import { customer } from "./constructors/customer.js"
import { navigateTo } from "./router.js"

const navList = document.querySelector("#navlist")
const navTargets = [
    {
        id: "toProducts",
        innerHTML: "Tooted",
        onClick: () => navigateTo("products", products)
    },
    {
        id: "toCart",
        innerHTML: `Korv (<span id="cartItemCount">0</span>)`,
        onClick: () => navigateTo("cart", cart)
    },
    {
        id: "toFavorites",
        innerHTML: `Lemmikud (<span id="favItemCount">0</span>)`,
        onClick: () => navigateTo("favorites", customer.favorites)
    }
]

export function getNavButtonElement(buttonId) {
    return navList.getElementById(buttonId)
}

export function setNavCartItemCount(amount) {
    const cartItemCount = document.querySelector("#cartItemCount")
    cartItemCount.innerHTML = parseInt(amount)
}

export function setNavFavItemCount(amount) {
    const favItemCount = document.querySelector("#favItemCount")
    favItemCount.innerHTML = parseInt(amount)
}

export function createNavButtons() {
    navTargets.forEach(data => {
        let newButton = document.createElement("li")
        newButton.id = "navitem"

        let buttonLink = document.createElement("a")
        buttonLink.innerHTML = data.innerHTML
        buttonLink.href = "#"
        buttonLink.onclick = data.onClick

        newButton.append(buttonLink)
        navList.append(newButton)
    });
}