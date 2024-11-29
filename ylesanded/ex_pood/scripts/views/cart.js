function createCartItem(product, amount) {
    let element = document.createElement("div")
    element.id = "cartItem"

    element.innerHTML = `
        <h2>${product.name}</h2>
        <div>
            <p>Kogus: ${amount}</p>
            <p>Hind: ${product.price * amount}</p>
        </div>
    `

    return element
}

export function displayCart(cart) {
    const mainContainer = document.querySelector("#mainContainer")
    mainContainer.innerHTML = ""

    const cartContainer = document.createElement("div")
    cartContainer.id = "cartContainer"
    cartContainer.innerHTML = "<h1>Ostukäru</h1>"

    const cartView = document.createElement("div")
    cartView.id = "productsView"

    mainContainer.append(cartContainer)
    cartContainer.append.cartView

    cart.items.forEach(item => {
        cartContainer.append(createCartItem(item.product, item.amount))     
    });
}