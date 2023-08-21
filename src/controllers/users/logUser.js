const { User } = require("../../db");
const bcrypt = require('bcrypt');



const logUser = async (
    name,
    lastname,
    password
) => {
    const findUser = await User.findAll();
    const exist = findUser.find(e => e.name === name && e.lastname === lastname)
    if (exist) {
        const match = await bcrypt.compare(password, exist.password);
        if (match) {
            return exist
        } else {
            throw new Error("contraseña incorrecta")
        }
    } else {
        throw new Error("Nombre o apellido incorrectos")
    }
};

module.exports = { logUser };