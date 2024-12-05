// classes
import { Product } from "./constructors/product.js"
import { Cart } from "./constructors/cart.js"
import { Order } from "./constructors/order.js"
import { Customer } from "./constructors/customer.js"

// views
import { displayProducts } from "./views/products.js"
import { displayCart } from "./views/cart.js"

// router
import { navigateTo } from "./router.js"
import { createNavButtons } from "./nav.js"

document.title = "E-Pood"

export let products = [
    new Product(0, "Õun", 0.7, "Puuvili"),
    new Product(1, "Mandariin", 3, "Puuvili"),
    new Product(2, "Banaan", 2, "Puuvili"),
    new Product(3, "Manraan", 10, "Puuvili")
]

export let cart = new Cart()

createNavButtons()
displayProducts(products)