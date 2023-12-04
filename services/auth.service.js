const { getUid } = require('../utils/index')
const { generateToken } = require('../utils/jwt')
const { UserService } = require('../services/user.service')

const login = async (user) => {
    const access_token = generateToken({
      sub: user.id_user,
      username: user.username,
    })
    const refresh_token = getUid()
  
    const updatedUser = await UserService.update({
      ...user,
      refresh_token
    })
  
    const loginData = {
      tokens: {
        access_token,
        refresh_token
      },
      user: updatedUser
    }
  
    return loginData
}

module.exports = {
    AuthService: {
        login
    }
}