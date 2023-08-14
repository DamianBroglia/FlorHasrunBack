const { Product } = require("../../db");

const postProduct = async (
    name,
    image,
    minimalDescription,
    description,
    duration,
    price,
) => {
    console.log("Llegó?");
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

