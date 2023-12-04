const handleHttp = (res, data = null, status = 200) => {
    if (!data) {
        return res.status(status).end()
    }

    return res.status(status).json(data)
}
  
const success = (res, data = null, status = 200) => {
    return handleHttp(res, data, status)
}
  
const created = (res, data = null) => {
    return handleHttp(res, data, 201)
}
  
const badRequest = (res, data = null) => {
    return handleHttp(res, data, 400)
}
  
const unauthorized = (res) => {
    return handleHttp(res, null, 401)
}
  
const forbidden = (res) => {
    return handleHttp(res, null, 403)
}
  
const notFound = (res) => {
    return handleHttp(res, null, 404)
}
  
const serverError = (res, error) => {
    console.log(`Server error: ${error.message}`)
    return handleHttp(res, null, 500)
}
  
module.exports = {
    success,
    created,
    badRequest,
    unauthorized,
    forbidden,
    notFound,
    serverError
}