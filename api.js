const express = require('express')
const router = express.Router()
const User = require('./users')

router.get('/users', (req, res) => {
    User.find({})
        .then(user => {
            res.send(user)
        })
})

router.get('/users/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    User.findById({_id: req.params.id })
        .then(user => {
            res.send(user)
        })
})

router.post('/users', (req, res) => {
    User.create(req.body)
        .then(user => {
            res.send(user)
        })
})

router.put('/users/:id', (req, res) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            User.findOne({_id: req.params.id})
                .then(user => {
                    res.send(user)
                })
        })
})

router.delete('/users/:id', (req, res) => {
    User.deleteOne({_id: req.params.id})
        .then(user => {
            res.send(user)
        })
})

module.exports = router