require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes/routes')

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

const mongoUrl = `mongodb+srv://guilherme:xJ8ansyXDo3PzTFO@cluster0.jiz8pb1.mongodb.net/infinityPower?retryWrites=true&w=majority`

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

let cors = require("cors");
app.use(cors());


app.use('/register', routes)
app.use('/accounts', routes)



app.use("/", (req, res) => {
    console.log("right")
    res.send("Wellcome again my friend.")
 }) 


mongoose.connect(mongoUrl).then(() => {
    app.listen(3000, () => console.log('Everything is all right my master'))
}).catch((erro) => {
    console.log("O Erro foi: " + erro)
})