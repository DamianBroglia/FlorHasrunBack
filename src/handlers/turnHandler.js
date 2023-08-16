const { deleteTurn } = require("../controllers/turns/deleteTurn");
const { getTurnByProductId } = require("../controllers/turns/getTurnByProductId");
const { getTurnByUserId } = require("../controllers/turns/getTurnByUserId");
const { getTurnsByDay } = require("../controllers/turns/getTurnsByDay");
const { postTurn } = require("../controllers/turns/postTurn");
const { putTurn } = require("../controllers/turns/putTurn");
const { getAllTurns } = require ("../controllers/turns/getAllTurns")

const getAllTurnsHandler = async (req, res) => {
    try {
        const allTurn = await getAllTurns();
        res.status(200).json(allTurn);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteTurnHandler = async (req, res) => {
    try {
        const {turnId, userId, cancelAnyWay} = req.params
        const deletedTurn = await deleteTurn(turnId, userId, cancelAnyWay);
        res.status(200).json(deletedTurn);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getTurnByProductIdHandler = async (req, res) => {
    try {
        const { productId } = req.params;
        const productTurns = await getTurnByProductId(productId);
        res.status(200).json(productTurns);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getTurnByUserIdHandler = async (req, res) => {
    try {
        const { userId } = req.params;
        const userTurns = await getTurnByUserId(userId)
        res.status(200).json(userTurns);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getTurnsByDayHandler = async (req, res) => {
    try {
        const { date } = req.params;
        const dateTurns = await getTurnsByDay(date);
        res.status(200).json(dateTurns);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const postTurnHandler = async (req, res) => {
    try {
        const { dateInit, hourInit, price, userId, productId } = req.body;
        const newTurn = await postTurn( dateInit, hourInit, price, userId, productId  );
        res.status(200).json(newTurn);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const putTurnHandler = async (req, res) => {
    try {
        const { turnId, userId, productId, dateInit, hourInit, state, cancel} = req.body;
        const editTurn = await putTurn(turnId, userId, productId, dateInit, hourInit, state, cancel);
        res.status(200).json(editTurn);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    getAllTurnsHandler,
    deleteTurnHandler,
    getTurnByProductIdHandler,
    getTurnByUserIdHandler,
    getTurnsByDayHandler,
    postTurnHandler,
    putTurnHandler
};