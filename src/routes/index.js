const { Router } = require("express");
const router = Router();

const commentsRouter = require("./commentsRouter")
const productsRouter = require("./productsRouter")
const turnRouter = require("./turnRouter")
const userRouter = require("./userRouter") 
const infoUser = require("./infoUserRouter")

router.use("/comments", commentsRouter)
router.use("/products", productsRouter)
router.use("/turns", turnRouter)
router.use("/users", userRouter)
router.use("/infoUser", infoUser)

module.exports = router;