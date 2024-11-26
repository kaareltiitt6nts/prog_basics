import { Product } from "./product.js"
import { Cart } from "./cart.js"
import { Order } from "./order.js"
import { Customer } from "./customer.js"

let cart = new Cart()

cart.addProduct(new Product(1, "apple", 10, "puuvili"), 5)
cart.addProduct(new Product(2, "pear", 2, "puuvili"), 5)

let order = new Order(1, cart)
order.printOrder()

let customer = new Customer("Joosep")
customer.placeOrder(order)
customer.printOrderHistory()