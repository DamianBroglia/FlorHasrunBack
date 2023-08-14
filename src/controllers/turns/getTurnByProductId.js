const { Turn } = require("../../db");

const getTurnByProductId = async (productId) => {
    const turns = await Turn.findAll({
        where: {
            productId
        }
    });
    return turns;
};

module.exports = { getTurnByProductId };