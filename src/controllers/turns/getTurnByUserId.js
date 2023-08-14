const { Turn, Product } = require("../../db");

const getTurnByUserId = async (userId) => {
    const turns = await Turn.findAll({
        where: { userId },
        include: [Product]  
    });
    return turns;
};

module.exports = { getTurnByUserId };