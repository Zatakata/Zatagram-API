const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema({
    name: String,
    nickname: String,
    avatar: String,
    age: Number,
    posts: [
        {
            name: String,
            likes: Number,
            isLike: Boolean,
            photoSrc: String, 
        }
    ]
})

const User = mongoose.model("users", UsersSchema)

module.exports = User