export class Order {
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