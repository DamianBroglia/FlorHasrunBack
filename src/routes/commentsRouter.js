const {Router} = require ("express");
const {
    getCommentsByProductIdHandler,
    postCommentHandler,
    deleteCommentHandler,
    putCommentHandler,
} = require("../handlers/commentHandler");
const commentsRouter = Router();


commentsRouter.get("/:productId",  getCommentsByProductIdHandler);

commentsRouter.post("/", postCommentHandler);

commentsRouter.delete("/:userId/:id", deleteCommentHandler);

commentsRouter.put("/", putCommentHandler)

module.exports = commentsRouter;