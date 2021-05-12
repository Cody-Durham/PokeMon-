require('dotenv').config()

//import express
const express = require('express')

//instantite a new app
const app = express()

const PORT = process.env.PORT
// const PORT = 3000



//Need to install middlewares here
// morgan
const logger = require('morgan')
app.use(logger('dev'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())



app.get('/', (req, res) => {
    res.json({
        status: 200, 
        msg: "hit the DEFAULT route"
    })
})

//need to import the controllers
const pokemonController = require('./controllers/pokemonController')
app.use('/pokemon', pokemonController)

app.listen(PORT, () => {
    console.log(`Listning in on port ${PORT}`);
})