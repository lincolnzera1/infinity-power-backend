const mongoose = require('mongoose')

const Account = mongoose.model("Accounts", {
    email: String,
    password: String,
    name: String
})

module.exports = Account