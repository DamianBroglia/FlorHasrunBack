const { User, InfoUser, Turn } = require("../../db");

const getAllUsers = async () => {
    const users = await User.findAll({
        include: [
            { model: InfoUser },
            { model: Turn }
        ]
    });
    return users;
};

module.exports = { getAllUsers };