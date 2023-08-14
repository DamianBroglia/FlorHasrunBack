const { User } = require("../../db")

const putUser = async (userId, celNumber, password, vip, spamHour, spamDay, spamService) => {
    const user = await User.findByPk(userId)

    if (celNumber) {
        user.celNumber = celNumber
    }
    if (password) {
        user.password = password
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