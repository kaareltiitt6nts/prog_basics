import { cart } from "../constructors/cart.js"
import { customer } from "../constructors/customer.js"
import { Order } from "../constructors/order.js"
import { calculateVatTotalPrice, calculateVat, getFormattedPrice } from "../util.js"

function createCartItem(product, amount) {
    let element = document.createElement("div")
    element.id = "cartItem"

    element.innerHTML = `
        <h2>${product.name}</h2>
        <div>
            <div>
                <input id="amount">${amount}</input>
                <button id="addButton">+</button>
                <button id="removeButton">-</button>
            </div>
            <p>Hind: ${getFormattedPrice(product.price * amount)}</p>
        </div>
        <button id="removeFromCart">Eemalda</button>
    `

    const removeFromCart = element.querySelector("#removeFromCart")
    const addButton = element.querySelector("#addButton")
    const removeButton = element.querySelector("#removeButton")

    removeFromCart.onclick = () => {
        cart.removeProduct(product.id)
        displayCart(cart)
    }

    addButton.onclick = () => {
        cart.updateProductAmount(product.id, 1)
        displayCart(cart)
    }

    removeButton.onclick = () => {
        const result = cart.updateProductAmount(product.id, -1)

        if (result.amount === 0) {
            cart.removeProduct(product.id)
        }

        displayCart(cart)
    }

    return element
}

export function displayCart(cart) {
    const mainContainer = document.querySelector("#mainContainer")
    mainContainer.innerHTML = ""

    const cartContainer = document.createElement("div")
    cartContainer.id = "cartContainer"
    cartContainer.innerHTML = 
    `
        <h1>Ostukorv</h1>
        <div id="cartView"></div>
        <h2 id="vat"></h2>
        <h2 id="totalPrice"></h2>
        <button id="submitPurchase">Soorita ost</button>
    `

    const cartView = cartContainer.querySelector("#cartView")
    const vat = cartContainer.querySelector("#vat")
    const totalPrice = cartContainer.querySelector("#totalPrice")
    const submitPurchase = cartContainer.querySelector("#submitPurchase")

    const price = cart.getTotalPrice()

    vat.innerHTML = `Käibemaks: ${getFormattedPrice(calculateVat(price))}`
    totalPrice.innerHTML = `Koguhind: ${getFormattedPrice(calculateVatTotalPrice(price))}`

    cart.items.forEach(item => {
        cartView.append(createCartItem(item.product, item.amount))     
    });

    submitPurchase.onclick = () => {
        if (cart.totalItems > 0) {
            //alert("Ost sooritatud!")
            customer.placeOrder(new Order(0, cart)) // tee id
        }
        else {
            //alert("Ostukorv on tühi!")
        }
    }

    mainContainer.append(cartContainer)
}