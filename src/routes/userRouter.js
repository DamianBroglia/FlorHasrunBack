const {Router} = require ("express");
const {
    getAllUsersHandler,
    getUserByIdHandler,
    postUserHandler,
    putUserHandler,
    logUserHandler
} = require("../handlers/userHandler");
const userRouter = Router();


userRouter.get("/",  getAllUsersHandler);

userRouter.get("/:id", getUserByIdHandler);

userRouter.put("/login", logUserHandler);

userRouter.post("/", postUserHandler);

userRouter.put("/", putUserHandler)

module.exports = userRouter;