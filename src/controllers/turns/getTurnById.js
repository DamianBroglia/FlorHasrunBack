const { Turn } = require("../../db");

const getTurnById = async (id) => {
    const turn = await Turn.findByPk(id);
    return turn;
};

module.exports = { getTurnById };