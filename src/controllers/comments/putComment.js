const { Comment } = require("../../db")

const putComment = async (userId, commentId, editComment) => {
    const comment = await Comment.findByPk(commentId)
    if (comment.userId === userId) {
        comment.comment = editComment
    }
    await comment.save()
    return comment
}

module.exports = { putComment }