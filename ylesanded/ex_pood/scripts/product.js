export class Product {
    constructor(id, name, price, category) {
        this.id = id
        this.name = name
        this.price = price
        this.category = category
    }

    describe() {
        return `${this.id}, ${this.name}, ${this.price}, ${this.category}`
    }

    // võimalik, et ebavajalik. saaks loopis ehk kuidagi kasutada?
    getData() {
        return {
            "id": this.id,
            "name": this.name,
            "price": this.price,
            "category": this.category
        }
    }

    static discountedPrice(product, discountPercent) {
        return product.price * discountPercent/100
    }
}