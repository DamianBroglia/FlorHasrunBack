const { getCommentsByProductId } = require("../controllers/comments/getCommentsByProductId");
const { postComment } = require("../controllers/comments/postComment");
const { deleteComment } = require("../controllers/comments/deleteComment");
const { putComment } = require("../controllers/comments/putComment");


const getCommentsByProductIdHandler = async (req, res) => {
    try {
        const {productId} = req.params
        const productComments = await getCommentsByProductId(productId);
        res.status(200).json(productComments);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const postCommentHandler = async (req, res) => {
    try {
        const {userName, date, comment, rating, productId, userId } = req.body;
        const newComment = await postComment(userName, date, comment, rating, productId, userId );
        res.status(200).json(newComment);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteCommentHandler = async (req, res) => {
    try {
        const { userId, id } = req.params;
        const delComment = await deleteComment(userId, id);
        res.status(200).json(delComment);
    } catch (error) {
        res.status(400).json(error.message);
    }
};


const putCommentHandler = async (req, res) => {
    try {
        const { userId, commentId, editComment } = req.body;
        const editedComment = await putComment(userId, commentId, editComment );
        res.status(200).json(editedComment);
    } catch (error) {
        res.status(400).json(error.message);
    }
};


module.exports = {
    getCommentsByProductIdHandler,
    postCommentHandler,
    deleteCommentHandler,
    putCommentHandler,
};