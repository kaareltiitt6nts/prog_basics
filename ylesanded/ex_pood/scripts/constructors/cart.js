import { setNavCartItemCount } from "../nav.js"

export class Cart {
    constructor() {
        this.items = []
    }

    get totalItems() {
        return this.items.length
    }

    findProduct(productId) {
        return this.items.find((el) => {
            return el.product.id === productId
        })
    }

    addProduct(product, amount) {
        let result = this.findProduct(product.id)
        if (!result) {
            this.items.push({
                "product": product,
                "amount": amount
            })
        }
        else {
            result.amount += amount
        }

        setNavCartItemCount(cart.totalItems)
    }

    updateProductAmount(id, amountToAdd) {
        let result = this.findProduct(id)
        if (result) {
            result.amount += amountToAdd
        }

        return result
    }

    setProductAmount(id, amount) {
        let result = this.findProduct(id)
        if (result) {
            result.amount = amount
        }

        return result
    }

    removeProduct(productId) {
        this.items = this.items.filter(el => {
            return el.product.id !== productId
        })

        setNavCartItemCount(cart.totalItems)
    }

    getTotalPrice() {
        return this.items.reduce((acc, item) => {
           return acc + (item.product.price * item.amount)
        }, 0)
    }
}

export const cart = new Cart()