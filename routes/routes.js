const express = require('express')
const router = express.Router()
const Account = require('../models/account')


router.post("/", async (req, res) => {
    const {email, password, name} = req.body

    const account = {
        email,
        password,
        name
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

router.get("/", async (req, res) => {
    
    const {email, password} = req.body // Pega as infos do formulario reactjs

    const accounts = await Account.find() // Procura pelo email que vai chegar do (nao mais)
                                                            // formulario react.
    /* if(accounts == null){
        res.json({login: "no"})
        console.log("passei 1")
    }else if(email == accounts.email && password == accounts.password){
        console.log(accounts)
        console.log("passei 2")
        res.json({login: "yes"})
    }else{
        console.log("passei 3")
        
    } */
    res.json(accounts)
})

module.exports = router