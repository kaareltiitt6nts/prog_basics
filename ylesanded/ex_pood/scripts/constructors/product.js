export class Product {
    constructor(id, name, price, category, discount = 0) {
        this.id = id
        this.name = name
        this.price = price
        this.category = category
        this.discount = discount
    }

    describe() {
        return `${this.id}, ${this.name}, ${this.price}, ${this.category}, ${this.discount}`
    }

    get finalPrice() {
        return this.price - this.price * this.discount/100
    }
}

export const products = [
    new Product(0, "Õun", 0.75, "fruits", 0),
    new Product(1, "Mandariin", 2.99, "fruits", 0),
    new Product(2, "Banaan", 1.99, "fruits", 0),
    new Product(3, "Manaan", 9.99, "fruits", 20),
    new Product(3, "Sülearvuti", 349.99, "electronics", 0),
    new Product(3, "Telefon", 159.95, "electronics", 0),
    new Product(3, "Tahvelarvuti", 249.95, "electronics", 20),
    new Product(3, "Kõrvaklapid", 65.95, "electronics", 20)
]