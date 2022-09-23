const mongoose = require('mongoose')

const Account = mongoose.model("Accounts", {
    email: String,
    password: String
})

module.exports = Account