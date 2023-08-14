const { Turn } = require("../../db");

const getAllTurns = async () => {
    const allTurns = await Turn.findAll();
    return allTurns;
};

module.exports = { getAllTurns };