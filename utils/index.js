const { v4 } = require('uuid');

const getUid = (withSeparator = true) => {
    return withSeparator ? v4() : v4().replace(/-/g, '')
}

module.exports = {
    getUid
}