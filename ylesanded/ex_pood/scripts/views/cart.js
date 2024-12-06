import { cart } from "../constructors/cart.js"
import { customer } from "../constructors/customer.js"
import { Order } from "../constructors/order.js"
import { setNavCartItemCount } from "../nav.js"
import { navigateTo } from "../router.js"

function createCartItem(product, amount) {
    let element = document.createElement("div")
    element.id = "cartItem"

    element.innerHTML = `
        <h2>${product.name}</h2>
        <div>
            <input id="amountInput" type="number" min=1 step=1 value=${amount}>
            <p>Hind: ${(product.price * amount).toFixed(2)}</p>
        </div>
        <button id="removeFromCart">Eemalda</button>
    `

    // halb!!!
    const removeFromCart = element.querySelector("#removeFromCart")
    const amountInput = element.querySelector("#amountInput")
    removeFromCart.onclick = () => {
        cart.removeProduct(product.id)
        displayCart(cart)
    }

    // halb!!!
    amountInput.onclick = () => {
        cart.setProductAmount(product.id, amountInput.value)
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
        <h2 id="totalPrice"></h2>
        <button id="submitPurchase">Soorita ost</button>
    `

    const cartView = cartContainer.querySelector("#cartView")
    const totalPrice = cartContainer.querySelector("#totalPrice")
    const submitPurchase = cartContainer.querySelector("#submitPurchase")

    totalPrice.innerHTML = `Koguhind: ${cart.getTotalPrice().toFixed(2)}`

    cart.items.forEach(item => {
        cartView.append(createCartItem(item.product, item.amount))     
    });

    submitPurchase.onclick = () => {
        if (cart.totalItems > 0) {
            //alert("Ost sooritatud!")
            Order.create(customer, 0, cart) // tee id
        }
        else {
            //alert("Ostukorv on tühi!")
        }
    }

    mainContainer.append(cartContainer)
}