const express = require('express')
const router = express.Router()
const Account = require('../models/account')


router.post("/", async (req, res) => {
    const {email, password} = req.body

    const account = {
        email,
        password
    }

    try {
        await Account.create(account)
        console.log("Account created")
        res.send("1")
    } catch (error) {
        console.log("An error happened, and the account can't be created.")
        res.send("2")
    }
})

module.exports = router