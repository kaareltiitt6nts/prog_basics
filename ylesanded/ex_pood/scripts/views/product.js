import { cart } from "../main.js"
import { setNavCartItemCount } from "../nav.js"

export function displayProduct(product) {
    const mainContainer = document.querySelector("#mainContainer")
    mainContainer.innerHTML = ""

    const productContainer = document.createElement("div")
    productContainer.id = "productsContainer"
    productContainer.innerHTML = "<h1>Toode</h1>"

    const productView = document.createElement("div")
    productView.id = "productView"
    productView.innerHTML = `
        <h1>${product.name}</h1>
        <h1>Hind: ${product.price}</h1>
        <h1>Kategooria: ${product.category}</h1>
        <form id="addToCart">
            <input type="number" id="amount" value="1" min="1">
            <input type="submit" value="Lisa korvi">
        </form>
    `

    const cartForm = productView.querySelector("#addToCart")
    cartForm.addEventListener("submit", (event) => {
        event.preventDefault()
        
        const amount = parseInt(cartForm.querySelector("#amount").value)
        cart.addProduct(product, amount)
        setNavCartItemCount(cart.totalItems)
    })

    mainContainer.append(productContainer)
    productsContainer.append(productView)
}