const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    dormUID: {
        type: String,
    },
    name: {
        type: String,
    },
    citizenID: {
        type: String,
    },
    room: {
        type: String,
    },
    email: {
        type: String,
    },
    studentID: {
        type: String,
    },
    uni: {
        type: String
    }
});

const User = module.exports = mongoose.model('User', userSchema)