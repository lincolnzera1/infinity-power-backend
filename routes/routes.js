const express = require('express')
const router = express.Router()

// Models
const Account = require('../models/account')
const EspData = require('../models/espData')

// ShortId
const short = require('shortid');


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

    const data = req.params.data
    const dia = new Date().getDate().toString()
    const mes = new Date().getMonth().toString()

    var meses = [
        "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
        "Julho","Agosto",
        "Setembro","Outubro",
        "Novembro","Dezembro"
    ];
    //const data = 0

    const espData = {
        identificacao: "esp1",
        data,
        dia: 11,
        mes: meses[mes]
    }

    console.log("O espdata corresponde a: " + espData)
    const espdatas = await EspData.find({identificacao: data})

    try {
           
        if(espdatas){
            console.log('Parametro indica que ja existe tais resultados no mongodb .')

            //await EspData.findOneAndUpdate({data: 0})

            res.send(espdatas)
            
        }else{
            await EspData.create(espData)
            console.log("O espdata corresponde a: " + meses[mes])
            console.log("Account created")
            res.send('Account created: ' + Object.values(espData))
        }
        
    } catch (error) {
        console.log("An error happened =/, and the account can't be created.")
        res.send("2")
    }
    
})

router.get("/", async (req, res) => {
    
    const {email, password} = req.body // Pega as infos do formulario reactjs

    const esp = await EspData.find() // Procura pelo email que vai chegar do (nao mais)
                                                            // formulario react.
    res.json(esp)
})

module.exports = router