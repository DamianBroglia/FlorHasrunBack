const { Product } = require("../../db");

const getAllProducts = async () => {
    const products = await Product.findAll();
    return products;
};

module.exports = { getAllProducts };