const { User } = require('../models/user.model')
const { getUpdatedModel, mapToJson } = require('../utils/db')

const customMapToJson = (
    userModel,
    withPassword,
    withRefreshToken
  ) => {
    const user = mapToJson(userModel)
    
    if (user.password !== undefined && !withPassword) {
      Reflect.deleteProperty(user, 'password')
    }
  
    if (user.refresh_token !== undefined && !withRefreshToken) {
      Reflect.deleteProperty(user, 'refresh_token')
    }
  
    return user
  }

const getOne = async (
    filters,
    withPassword = false,
    withRefreshToken = false
  ) => {
    const user = await User.findOne({
      where: {
        ...filters
      }
    })
    return customMapToJson(user, withPassword, withRefreshToken)
  }

const update = async (user) => {
  
    const result = await User.update(user, { 
      where: { id_user: user.id_user },
      returning: true
    })

    const updatedUser = getUpdatedModel(result)
    return customMapToJson(updatedUser, false)
}

module.exports = {
    UserService: {
        update,
        getOne
    }
}