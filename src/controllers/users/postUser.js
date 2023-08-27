const { User } = require("../../db");
const bcrypt = require('bcrypt');

function hashPassword(password) {
    return bcrypt.hash(password, 10);
}

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
        const passHash = await hashPassword(password)
        if (passHash){
            const newUser = await User.create({
                name,
                lastname,
                celNumber,
                password:passHash,
                verified:false,
                credits:"0",
                vip: false,
                spamHour: false,
                spamDay: false,
                spamService: false
            })
        return newUser;
        }else{
            console.log("error");
        }

    }
};

module.exports = { postUser };