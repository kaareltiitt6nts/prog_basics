class Product {
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

class Cart {
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

class Order {
    constructor(cart) {
        this.orderDate = new Date()
        this.cart = cart
    }

    printOrder() {
        console.log(this.orderDate)

        // ei osanud pakkuda mis vormis ta tulema peaks
        // otsustasin foreachi kasuks, sest siis
        // ei tuleks see print liiga pikk ning
        // oleks mitme rea peale ära jaotatud.
        this.cart.items.forEach(element => {
            console.log(element.product.name)
        });
        
        console.log(this.cart.getTotalPrice())
    }
}

class Customer {
    constructor(name) {
        this.name = name
        this.orderHistory = []
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

let cart = new Cart()

cart.addProduct(new Product(1, "apple", 10, "puuvili"), 5)
cart.addProduct(new Product(2, "pear", 2, "puuvili"), 5)

let order = new Order(cart)
order.printOrder()

let customer = new Customer("Joosep")
customer.placeOrder(order)
customer.printOrderHistory()