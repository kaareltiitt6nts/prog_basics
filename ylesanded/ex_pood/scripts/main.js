// classes
import { Product } from "./constructors/product.js"
import { Cart } from "./constructors/cart.js"
import { Order } from "./constructors/order.js"
import { Customer } from "./constructors/customer.js"

// views
import { displayProducts } from "./views/products.js"
import { displayCart } from "./views/cart.js"

document.title = "E-Pood"

const products = [
    new Product(0, "Õun", 0.7, "Puuvili"),
    new Product(1, "Mandariin", 3, "Puuvili"),
    new Product(2, "Banaan", 2, "Puuvili")
]

let cart = new Cart()
cart.addProduct(products[0], 4)
cart.addProduct(products[1], 3)
cart.addProduct(products[2], 2)

displayProducts(products)