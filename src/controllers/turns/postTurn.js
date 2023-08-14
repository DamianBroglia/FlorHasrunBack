const { Turn } = require("../../db");

const postTurn = async (
    dateInit,
    hourInit,
    price,
    userId,
    productId
) => {
    const newTurn = await Turn.create({
        dateInit,
        hourInit,
        price,
        userId,
        productId,
        cancel: false,
        state: "toTake"
    })
    return newTurn;
};

module.exports = { postTurn };