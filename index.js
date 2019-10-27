const express = require("express")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// var cors = require('cors')
const app = express()

mongoose.connect('mongodb://localhost/zatagram-db', { useNewUrlParser: true, useUnifiedTopology: true })


// app.use(cors());
app.use(bodyParser.json())
app.use('/api', require('./api'))

app.listen(8080, () => {
    console.log("Server is listening");
})