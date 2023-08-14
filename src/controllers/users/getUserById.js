const { User, Turn } = require("../../db");

const getUserById = async (id) => {
    const user = await User.findByPk(id, {
        include: [
            { model: Turn }
        ]
    });
    return user;
};

module.exports = { getUserById };