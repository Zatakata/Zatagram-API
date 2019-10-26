const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema({
    name: String,
    nickname: String,
    avatar: String,
    age: Number,
})

const User = mongoose.model("users", UsersSchema)

module.exports = User