const { Product } = require("../../db");

const postProduct = async (
    name,
    image,
    minimalDescription,
    description,
    duration,
    price,
) => {
    const newProduct = await Product.create({
        name,
        image,
        minimalDescription,
        description,
        duration,
        price,
        view:true
    })
    return newProduct;
};

module.exports = { postProduct };

