/* 
<li id="navitem"><a href="#">Tooted</a></li>
<li id="navitem"><a href="#">Korv (<span id="cartItemCount">0</span>)</a></li>
*/

// router
import { cart, products } from "./main.js"
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
    }
]

export function getNavButtonElement(buttonId) {
    return navList.getElementById(buttonId)
}

export function setNavCartItemCount(amount) {
    const cartItemCount = document.querySelector("#cartItemCount")
    cartItemCount.innerHTML = parseInt(amount)
}

export function createNavButtons() {
    navTargets.forEach(data => {
        let newButton = document.createElement("li")
        newButton.id = "navitem"

        let buttonLink = document.createElement("a")
        buttonLink.innerHTML = data.innerHTML
        buttonLink.href = "#"
        buttonLink.addEventListener("click", data.onClick)

        newButton.append(buttonLink)
        navList.append(newButton)
    });
}