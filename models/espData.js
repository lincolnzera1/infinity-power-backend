const mongoose = require('mongoose')

const espData = mongoose.model("espData", {
    data: String,
    dia: String
})

module.exports = espData