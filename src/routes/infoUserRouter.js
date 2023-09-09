const {Router} = require ("express");
const {
postInfoUserHandler,
putInfoUserHandler
} = require("../handlers/infoUserHandler");
const infoUserRouter = Router();


infoUserRouter.post("/", postInfoUserHandler);


infoUserRouter.put("/", putInfoUserHandler)

module.exports = infoUserRouter;