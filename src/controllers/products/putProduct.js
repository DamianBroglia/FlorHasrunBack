const { Product } = require("../../db")

const putProduct = async (productId, name, image, minimalDescription, description, duration, price, view) => {
    const product = await Product.findByPk(productId)
    if (name) {
        product.name = name
    }
    if (image) {
        product.image = image
    }
    if (minimalDescription) {
        product.minimalDescription = minimalDescription
    }
    if (description) {
        product.description = description
    }
    if (duration) {
        product.duration = duration
    }
    if (price) {
        product.price = price
    }
    if (view === false) {
        product.view = false
    } else {
        product.view = true
    }
    await product.save()
    return product
}

module.exports = { putProduct }