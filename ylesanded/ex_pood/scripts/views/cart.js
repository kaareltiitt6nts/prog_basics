function createCartItem(product, amount) {
    let element = document.createElement("div")
    element.id = "cartItem"

    element.innerHTML = `
        <h2>${product.name}</h2>
        <div>
            <p>Kogus: ${amount}</p>
            <p>Hind: ${(product.price * amount).toFixed(2)}</p>
        </div>
    `

    return element
}

export function displayCart(cart) {
    const mainContainer = document.querySelector("#mainContainer")
    mainContainer.innerHTML = ""

    const cartContainer = document.createElement("div")
    cartContainer.id = "cartContainer"
    cartContainer.innerHTML = 
    `
        <h1>Ostukäru</h1>
        <div id="productsView"></div>
        <h2 id="totalPrice"></h2>
    `

    const cartView = cartContainer.querySelector("#productsView")
    const totalPrice = cartContainer.querySelector("#totalPrice")

    totalPrice.innerHTML = `Koguhind: ${cart.getTotalPrice().toFixed(2)}`

    mainContainer.append(cartContainer)

    cart.items.forEach(item => {
        cartView.append(createCartItem(item.product, item.amount))     
    });
}