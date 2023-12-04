const { serverError, success, badRequest } = require('../utils/http')
const { UserService } = require('../services/user.service');
const { AuthService } = require('../services/auth.service')
const { verifyHash } = require('../utils/bcrypt.js')


const login = async ({ body }, res) => {
    try {
      const { username } = body
      const foundUser = await UserService.getOne({ username }, true)
  
      if (!foundUser.id_user) {
        return badRequest(res, 'Credenciales incorrectas')
      }
  
      if (!foundUser.state) {
        return badRequest(res, 'Usuario inactivo')
      }
  
      const passwordHash = foundUser.password
      const isValidPassword = await verifyHash(body.password, passwordHash)
  
      if (!isValidPassword) {
        return badRequest(res, 'Credenciales incorrectas')
      }
  
      const loginData = await AuthService.login({
        id_user: foundUser.id_user,
        username
      })
  
      return success(res, loginData)
    } catch (e) {
      return serverError(res, e)
    }
}

module.exports = {
    AuthController: {
        login
    }
}