const { Turn, User, Product } = require("../../db");

const getTurnsByDay = async (date) => {
    const turns = await Turn.findAll({
        include: [
            { model: User },
            { model: Product }
        ]
    })
    const turnsFiltered = turns.filter(e => e.dateInit === date)
    turnsFiltered.forEach(el => {
        let whitoutColon = el.hourInit.replace(":", "")
        let hourNum = parseInt(whitoutColon, 10)
        el.dataValues.hourNum = hourNum
    });
    const orderTurns = turnsFiltered.sort((a,b) => a.dataValues.hourNum - b.dataValues.hourNum)
    return orderTurns
};

module.exports = { getTurnsByDay };