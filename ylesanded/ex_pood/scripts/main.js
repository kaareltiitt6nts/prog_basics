// classes
import { Product, products } from "./constructors/product.js"
import { Cart, cart } from "./constructors/cart.js"
import { Order } from "./constructors/order.js"
import { Customer, customer } from "./constructors/customer.js"

// views
import { displayProducts } from "./views/products.js"

// router
import { createNavButtons } from "./nav.js"
import { navigateTo } from "./router.js"
import { getViewData } from "./localstorage.js"

document.title = "E-Pood"

const init = async () => {
    createNavButtons()
    displayProducts(products)

    document.querySelector("#shopName").onclick = () => navigateTo("products", products)
}

init()