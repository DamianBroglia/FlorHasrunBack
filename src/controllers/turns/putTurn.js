const { Turn } = require("../../db")

const putTurn = async (turnId, state) => {

    const turn = await Turn.findByPk(turnId)
    if (state) {
        turn.state = state
    }
    await turn.save()
    return turn
}

module.exports = { putTurn }