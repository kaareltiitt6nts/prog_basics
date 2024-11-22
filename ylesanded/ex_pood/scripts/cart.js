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
    }

    removeProduct(productId) {
        this.items = this.items.filter(el => {
            return el.product.id !== productId
        })
    }

    getTotalPrice() {
        return this.items.reduce((acc, item) => {
           return acc + (item.product.price * item.amount)
        }, 0)
    }
}