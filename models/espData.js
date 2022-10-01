const mongoose = require('mongoose')

const espData = mongoose.model("espData", {
    data: String
})

module.exports = espData