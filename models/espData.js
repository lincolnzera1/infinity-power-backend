const mongoose = require('mongoose')

const espData = mongoose.model("espData", {
    identificacao: String,
    data: String,
    dia: String,
    mes: String
})

module.exports = espData