import { setNavFavItemCount } from "../nav.js"

export class Customer {
    constructor(id, name) {
        this.id = id
        this.name = name
        this.orderHistory = []
        this.favorites = []
    }

    hasFavorite(product) {
        return this.favorites.includes(product.id)
    }

    toggleFavorite(product) {
        if (!this.hasFavorite(product)) {
            this.favorites.push(product.id)
        }
        else {
            const existsIndex = this.favorites.indexOf(product.id)
            if (existsIndex > -1) {
                this.favorites.splice(existsIndex, 1)
            }
        }

        setNavFavItemCount(this.favorites.length)
    }

    placeOrder(order) {
        this.orderHistory.push(order)
    }

    printOrderHistory() {
        this.orderHistory.forEach(order => {
            console.log(order.cart.getTotalPrice(), order.orderDate)
        })
    }
}

export const customer = new Customer(0, "Joosep")