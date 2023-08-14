const {Router} = require ("express");
const {
    getAllProductsHandler,
    getProductByIdHandler,
    postProductHandler,
    putProductHandler
} = require("../handlers/productsHandler");
const productsRouter = Router();


productsRouter.get("/",  getAllProductsHandler);

productsRouter.get("/:id", getProductByIdHandler);

productsRouter.post("/", postProductHandler);

productsRouter.put("/", putProductHandler)

module.exports = productsRouter;