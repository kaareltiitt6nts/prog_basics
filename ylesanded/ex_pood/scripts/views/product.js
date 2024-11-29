export function displayProduct(product) {
    const mainContainer = document.querySelector("#mainContainer")
    mainContainer.innerHTML = ""

    const productContainer = document.createElement("div")
    productContainer.id = "productsContainer"
    productContainer.innerHTML = "<h1>Toode</h1>"

    const productView = document.createElement("div")
    productView.id = "productView"
    productView.innerHTML = `
        <h1>${product.name}</h1>
        <h1>Hind: ${product.price}</h1>
        <h1>Kategooria: ${product.category}</h1>
    `

    mainContainer.append(productContainer)
    productsContainer.append(productView)
}