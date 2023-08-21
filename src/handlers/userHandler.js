const { getAllUsers } = require("../controllers/users/getAllUsers");
const { getUserById } = require("../controllers/users/getUserById");
const { postUser } = require("../controllers/users/postUser");
const { putUser } = require("../controllers/users/putUser");
const { logUser } = require("../controllers/users/logUser");


const getAllUsersHandler = async (req, res) => {
    try {
        const allUsers = await getAllUsers();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getUserByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getUserById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const postUserHandler = async (req, res) => {
    try {
        const { name, lastname, celNumber, password } = req.body;
        const newUser = await postUser(name, lastname, celNumber, password)
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const putUserHandler = async (req, res) => {
    try {
        const { userId, celNumber, password, vip, spamHour, spamDay, spamService } = req.body;
        const editUser = await putUser(userId, celNumber, password, vip, spamHour, spamDay, spamService);
        res.status(200).json(editUser);
    } catch (error) {
        res.status(400).json(error.message);
    }
};
const logUserHandler = async (req, res) => {
    try {
        const { name, lastname, password } = req.body;
        const loginUser = await logUser(name, lastname, password);
        res.status(200).json(loginUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



module.exports = {
    getAllUsersHandler,
    getUserByIdHandler,
    postUserHandler,
    putUserHandler,
    logUserHandler
};