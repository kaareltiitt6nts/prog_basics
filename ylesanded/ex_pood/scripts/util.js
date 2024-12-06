import { products } from "./constructors/product.js"

export function findProductById(productId) {
    return products.find(product => product.id == productId)
}