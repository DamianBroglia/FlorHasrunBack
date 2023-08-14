const { Turn } = require("../../db")

const deleteTurn = async (turnId, userId, cancelAnyWay) => {
    const date = new Date()
    const turn = await Turn.findByPk(turnId)
    if (turn.userId === userId) {
        if (turn.dateInit < date) {
            turn.destroy()
        }
        if(cancelAnyWay){
            turn.cancel = true;
            await turn.save()
        }
    }
    return turn
}

module.exports = { deleteTurn }