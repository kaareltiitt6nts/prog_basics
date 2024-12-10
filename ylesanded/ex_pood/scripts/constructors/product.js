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
    new Product(0, "Õun", 0.7, "Puuvili", 0),
    new Product(1, "Mandariin", 3, "Puuvili", 0),
    new Product(2, "Banaan", 2, "Puuvili", 0),
    new Product(3, "Manaan", 10, "Puuvili", 50)
]