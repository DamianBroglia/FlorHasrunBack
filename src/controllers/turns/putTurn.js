const { Turn } = require("../../db")

const putTurn = async (turnId, userId, productId, dateInit, hourInit, state, cancel) => {
    const date = new Date()
    const turn = await Turn.findByPk(turnId)
    if (state !== "toTake") {
        turn.state = state
    } else {
        if (turn.userId === userId) {
            if (turn.dateInit < date) {
                if (productId) {
                    turn.productId = productId
                }
                if (dateInit) {
                    if (dateInit < date) {
                        turn.dateInit = dateInit
                    } else {
                        throw new Error("Para guardar un turno debes hacerlo con 24 horas de anticipacion ")
                    }
                }
                if (hourInit) {
                    turn.hourInit = hourInit
                }

            } else {
                throw new Error("Los turnos pueden cancelarse o modificarse con 24 horas de anticipación")
            }
        }
    }
    if (cancel) {
        turn.cancel = true
    }

    await turn.save()
    return turn
}

module.exports = { putTurn }