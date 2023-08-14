const { getAllProducts } = require("../controllers/products/getAllProducts");
const { getProductById } = require("../controllers/products/getProductById");
const { postProduct } = require("../controllers/products/postProduct");
const { putProduct } = require("../controllers/products/putProduct");

const getAllProductsHandler = async (req, res) => {
    try {
        const allProducts = await getAllProducts();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getProductByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await getProductById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const postProductHandler = async (req, res) => {
    try {
        const { name, image, minimalDescription, description, duration, price } = req.body;
        console.log("Llegó acá?");
        const newProduct = await postProduct(name, image, minimalDescription, description, duration, price)
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const putProductHandler = async (req, res) => {
    try {
        const { productId, name, image, minimalDescription, description, duration, price, view } = req.body;
        const editedProduct = await putProduct(productId, name, image, minimalDescription, description, duration, price, view);
        res.status(200).json(editedProduct);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    getAllProductsHandler,
    getProductByIdHandler,
    postProductHandler,
    putProductHandler,
};