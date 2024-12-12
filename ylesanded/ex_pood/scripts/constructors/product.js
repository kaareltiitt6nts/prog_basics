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