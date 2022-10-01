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

router.get("/:email", async (req, res) => {
    console.log("aqui aqui aqui: " + req.params.email)
    const account = await Account.findOne({email: req.params.email})    
    if(account){
        console.log('deu certo')
        res.send(account)
    }else{
        console.log('not today')
        res.send('not today')
    }
})

router.get("/", async (req, res) => {
    
    const {email, password} = req.body // Pega as infos do formulario reactjs

    const accounts = await Account.find() // Procura pelo email que vai chegar do (nao mais)
                                                            // formulario react.
    res.json(accounts)
})

module.exports = router