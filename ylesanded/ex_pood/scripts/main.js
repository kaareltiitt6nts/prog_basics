import { products } from "./constructors/product.js"
import { displayProducts } from "./views/products.js"
import { navigateTo } from "./router.js"
import { createNavButtons } from "./nav.js"

document.title = "E-Pood"

const init = async () => {
    createNavButtons() // imelik
    displayProducts(products)

    document.querySelector("#shopName").onclick = () => navigateTo("products", products)
}

init()