import { cart } from "../constructors/cart.js"
import { setNavCartItemCount } from "../nav.js"
import { customer } from "../constructors/customer.js"

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
        <div id="productDetailView">
            <p>Hind: ${product.price}</p>
            <p>Kategooria: ${product.category}</p>
            <button id="favButton">Lisa lemmikuks</button>
            <form id="addToCart">
                <input type="number" id="amount" value="1" min="1">
                <input type="submit" value="Lisa korvi">
            </form>
        </div>
    `

    const favButton = productView.querySelector("#favButton")
    if (customer.hasFavorite(product)) {
        favButton.innerHTML = "Eemalda lemmikutest"
    }

    favButton.onclick = () => {
        if (!customer.hasFavorite(product)) {
            favButton.innerHTML = "Eemalda lemmikutest"
        }
        else {
            favButton.innerHTML = "Lisa lemmikuks"
        }

        customer.toggleFavorite(product)
    }

    const cartForm = productView.querySelector("#addToCart")
    cartForm.addEventListener("submit", (event) => {
        event.preventDefault()
        
        const amount = parseInt(cartForm.querySelector("#amount").value)
        cart.addProduct(product, amount)
    })

    mainContainer.append(productContainer)
    productsContainer.append(productView)
}