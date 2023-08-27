const { User } = require("../../db")
const bcrypt = require('bcrypt');

function hashPassword(password) {
    return bcrypt.hash(password, 10);
}

const putUser = async (userId, celNumber, password, verified, credits, vip, spamHour, spamDay, spamService) => {
    const user = await User.findByPk(userId)

    if (celNumber) {
        user.celNumber = celNumber
    }
    if (password) {
        const passHash = await hashPassword(password)
        user.password = passHash
    }
    if(vip !== undefined){
        user.vip = vip
    }
    if (verified) {
        user.verified = true
    }
    if (credits) {
        user.credits = credits
    }
    if (spamHour !== undefined) {
        user.spamHour = spamHour
    } 
    if (spamDay !== undefined) {
        user.spamDay = spamDay
    } 
    if (spamService !== undefined) {
        user.spamService = spamService
    } 

    await user.save()
    return user
}

module.exports = { putUser }