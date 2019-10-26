const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
    res.send({method: 'GET'})
})

router.post('/users', (req, res) => {
    res.send({method: 'POST'})
})

router.put('/users/:id', (req, res) => {
    res.send({method: 'PUT'})
})

router.delete('/users/:id', (req, res) => {
    res.send({method: 'DELETE'})
})

module.exports = router