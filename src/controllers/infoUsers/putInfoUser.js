const { InfoUser } = require("../../db")

const putInfoUser = async (
    id,
    turnsTakedIt,
    turnsFailed,
    turnsCancel,
    totalPay,
    loseForFail,
    totalTime,
    loseTime
) => {
    const changedInfoUser = await InfoUser.findByPk(id)

    if (turnsTakedIt) {
        changedInfoUser.turnsTakedIt = turnsTakedIt
    }
    if (turnsFailed) {
        changedInfoUser.turnsFailed = turnsFailed
    }
    if (turnsCancel) {
        changedInfoUser.turnsCancel = turnsCancel
    }
    if (totalPay) {
        changedInfoUser.totalPay = totalPay
    }
    if (loseForFail) {
        changedInfoUser.loseForFail = loseForFail
    }
    if (totalTime) {
        changedInfoUser.totalTime = totalTime
    }
    if (loseTime) {
        changedInfoUser.loseTime = loseTime
    }

    console.log(changedInfoUser);
    console.log(changedInfoUser.turnsTakedIt);
    console.log(changedInfoUser.turnsFailed);
    changedInfoUser.pasTurns = changedInfoUser.turnsTakedIt + changedInfoUser.turnsFailed
    console.log(changedInfoUser.pasTurns);


    changedInfoUser.averageAssists = Math.round((changedInfoUser.turnsTakedIt * 100) / changedInfoUser.pasTurns)
    console.log(changedInfoUser.averageAssists);

    if (changedInfoUser.pasTurns > 3) {
        if (changedInfoUser.averageAssists === 100) changedInfoUser.class = "A"
        if (changedInfoUser.averageAssists >= 80 && changedInfoUser.averageAssists < 100) changedInfoUser.class = "B"
        if (changedInfoUser.averageAssists >= 60 && changedInfoUser.averageAssists < 80) changedInfoUser.class = "C"
        if (changedInfoUser.averageAssists >= 40 && changedInfoUser.averageAssists < 60) changedInfoUser.class = "D"
        if (changedInfoUser.averageAssists < 40) changedInfoUser.class = "E"
    }

    console.log(changedInfoUser.class);



    await changedInfoUser.save()
    return changedInfoUser
}

module.exports = { putInfoUser }