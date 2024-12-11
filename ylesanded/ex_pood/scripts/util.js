import { products } from "./constructors/product.js"
import { VAT } from "./globaldata.js"

export function findProductById(productId) {
    return products.find(product => product.id == productId)
}

export function calculateVat(totalPrice) {
    return totalPrice * (VAT / 100)
} 

export function calculateVatTotalPrice(totalPrice) {
    return totalPrice + calculateVat(totalPrice)
}

export function getFormattedPrice(price) {
    if (!isNaN(price)) {
        return price.toFixed(2) + "€"
    }
}