const mongoose = require('mongoose')

const espData = mongoose.model("espData", {
    data: String,
    dia: String,
    mes: String
})

module.exports = espData