import { Product } from "./scripts/product.js"
import { Cart } from "./scripts/cart.js"
import { Order } from "./scripts/order.js"
import { Customer } from "./scripts/customer.js"

let cart = new Cart()

cart.addProduct(new Product(1, "apple", 10, "puuvili"), 5)
cart.addProduct(new Product(2, "pear", 2, "puuvili"), 5)

let order = new Order(1, cart)
order.printOrder()

let customer = new Customer("Joosep")
customer.placeOrder(order)
customer.printOrderHistory()