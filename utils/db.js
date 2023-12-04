const mapToJson = (model) => {
    if (!model) return {}
  
    const mappedData = model.toJSON()
  
    Reflect.deleteProperty(mappedData, 'created_at')
    Reflect.deleteProperty(mappedData, 'updated_at')
  
    return mappedData
}

const getUpdatedModel = (result) => {
    if (!result || result.length < 2 || !result[1] || result[1].length <= 0) {
      return null
    }
    return result[1][0]
  }

module.exports = {
    mapToJson,
    getUpdatedModel
}