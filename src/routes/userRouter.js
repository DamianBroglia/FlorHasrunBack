const {Router} = require ("express");
const {
    getAllUsersHandler,
    getUserByIdHandler,
    postUserHandler,
    putUserHandler
} = require("../handlers/userHandler");
const userRouter = Router();


userRouter.get("/",  getAllUsersHandler);

userRouter.get("/:id", getUserByIdHandler);

userRouter.post("/", postUserHandler);

userRouter.put("/", putUserHandler)

module.exports = userRouter;