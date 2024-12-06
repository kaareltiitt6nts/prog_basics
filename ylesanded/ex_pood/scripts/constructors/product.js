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

export const products = [
    new Product(0, "Õun", 0.7, "Puuvili"),
    new Product(1, "Mandariin", 3, "Puuvili"),
    new Product(2, "Banaan", 2, "Puuvili"),
    new Product(3, "Manaan", 10, "Puuvili")
]