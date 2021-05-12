// importing express
const express = require('express')

// instantiate a new instance of Router
const router = express.Router()

// importing the pokemons model (data)
const pokemonData = require('../models/pokemonModel')


router.get('/', (req, res) => {
    console.log('This is the GET pokemonData', pokemonData);
    res.json({
        status: 200, 
        msg: 'this is the index route', 
        data: pokemonData
    })
})

router.get('/:id', (req, res) => {
    console.log('This is the ID route', pokemonData[0]);
    res.json({
        status: 200, 
        msg: 'this is the ID route', 
        data:  pokemonData[req.params.id]
    })
})

router.delete('/:id', (req, res) => {
    console.log('This is the DELETE route', req.params);
    // let deleteObj = pokemonData[req.params.id]

    pokemonData.splice(req.params.id, 1)
    res.json({
        status: 200, 
        msg: 'this is the DELETE route', 
        deleteObj: pokemonData[req.params.id]
    })
})

router.post('/', (req, res) => {
    console.log('POST-req.body', req.body);

    pokemonData.push(req.body)
    res.json({
        status: 200, 
        msg: 'this is the POST route', 
        // data: req.body
    })
})

router.put('/:id', (req, res) => {
    console.log('PUT - req.params', req.params);

    pokemonData[req.params.id] = req.params
    res.json({
        status: 200, 
        msg: 'this is the PUT route'
    })
})



module.exports = router