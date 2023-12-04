const { hash, compare } = require('bcryptjs')

const generateHash = async (value) => {
  const valueHash = await hash(value, 8)
  return valueHash
}

const verifyHash = async (value, valueHash) => {
  const isValid = await compare(value, valueHash)
  return isValid
}

module.exports = {
    generateHash,
    verifyHash
}