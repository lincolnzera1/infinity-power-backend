const express = require('express')
const router = express.Router()

// Models
const Account = require('../models/account')
const EspData = require('../models/espData')


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

router.get("/:data", async (req, res) => {
    console.log("aqui aqui aqui: " + req.params.data)

    // const data = req.params.data

    const data = 0

    const espData = {
        data
    }
    const espdatas = await EspData.findOne({data: 0})

    try {
           
        if(espdatas){
            console.log('Parametro indica que ja existe tais resultados no mongodb')

            //await EspData.findOneAndUpdate({data: 0})

            res.send("Parametro indica que ja existe tais resultados no mongodb: " + espdatas)
            
        }else{
            console.log('not today')
            await EspData.create({data: 0, })
            console.log("Account created")
            res.send('Account created')
        }
        
    } catch (error) {
        console.log("An error happened =/, and the account can't be created.")
        res.send("2")
    }
    
})

router.get("/", async (req, res) => {
    
    const {email, password} = req.body // Pega as infos do formulario reactjs

    const accounts = await Account.find() // Procura pelo email que vai chegar do (nao mais)
                                                            // formulario react.
    res.json(accounts)
})

module.exports = router