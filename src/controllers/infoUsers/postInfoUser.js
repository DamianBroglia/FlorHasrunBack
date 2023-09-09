const { InfoUser } = require("../../db");

const postInfoUser = async (userId) => {
    const info = await InfoUser.create({
        pasTurns: 0,
        turnsTakedIt: 0,
        turnsFailed: 0,
        turnsCancel: 0,
        totalPay: 0,
        loseForFail: 0,
        totalTime: 0,
        loseTime: 0,
        averageAssists: 0,
        class: "new",
        userId
    })
    return info;
};

module.exports = { postInfoUser };


