const { User } = require("../../db")
const bcrypt = require('bcrypt');

function hashPassword(password) {
    return bcrypt.hash(password, 10);
}

const putUser = async (userId, celNumber, password, vip, spamHour, spamDay, spamService) => {
    const user = await User.findByPk(userId)

    if (celNumber) {
        user.celNumber = celNumber
    }
    if (password) {
        const passHash = await hashPassword(password)
        user.password = passHash
    }
    if (vip) {
        user.vip = true
    } else {
        user.vip = false
    }
    if(spamHour){
        user.spamHour = true
    }else{
        user.spamHour = false
    }
    if(spamDay){
        user.spamDay = true
    }else{
        user.spamDay = false
    }
    if(spamService){
        user.spamService = true
    }else{
        user.spamService = false
    }

    await user.save()
    return user
}

module.exports = { putUser }