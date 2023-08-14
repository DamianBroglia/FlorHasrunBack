const { Comment } = require("../../db");

const getCommentsByProductId = async (productId) => {
    const comments = await Comment.findAll({
        where: {
            productId
        }
    })
    return comments;
}
module.exports = { getCommentsByProductId };