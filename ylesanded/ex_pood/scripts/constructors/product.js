import { PRODUCT_CATEGORIES } from "../globaldata.js"

export class Product {
    constructor(id, name, price, category, discount = 0) {
        this.id = id
        this.name = name
        this.price = price
        this.category = category
        this.discount = discount
    }

    describe() {
        return `${this.id}, ${this.name}, ${this.price}, ${this.category}`
    }

    static discountedPrice(product, discountPercent) {
        return product.price * discountPercent/100
    }
}

export const products = [
    new Product(0, "Õun", 0.7, PRODUCT_CATEGORIES["fruits"], 0),
    new Product(1, "Mandariin", 3, PRODUCT_CATEGORIES["fruits"], 0),
    new Product(2, "Banaan", 2, PRODUCT_CATEGORIES["fruits"], 0),
    new Product(3, "Manaan", 10, PRODUCT_CATEGORIES["fruits"], 50)
]