const { User } = require("../../db");

const postUser = async (
    name,
    lastname,
    celNumber,
    password
) => {
    const findUser = await User.findAll();
    const exist = findUser.find(e => e.name === name && e.lastname === lastname)

    if (exist) {
        throw new Error("Ya hay un usuario con es nombre")
    } else {
        const newUser = await User.create({
            name,
            lastname,
            celNumber,
            password,
            vip: false,
            spamHour:false,
            spamDay:false,
            spamService:false
        })
        return newUser;
    }
};

module.exports = { postUser };