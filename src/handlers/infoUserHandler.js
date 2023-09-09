const { postInfoUser } = require("../controllers/infoUsers/postInfoUser")
const { putInfoUser } = require("../controllers/infoUsers/putInfoUser");



const postInfoUserHandler = async (req, res) => {
    try {
        const { userId } = req.body;
        const newInfo = await postInfoUser(userId)
        res.status(200).json(newInfo);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const putInfoUserHandler = async (req, res) => {
    try {
        const {id, turnsTakedIt, turnsFailed, turnsCancel, totalPay, loseForFail, totalTime, loseTime } = req.body;
        const changedInfo = await putInfoUser(id, turnsTakedIt, turnsFailed, turnsCancel, totalPay, loseForFail, totalTime, loseTime)
        res.status(200).json(changedInfo);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    postInfoUserHandler,
    putInfoUserHandler
};