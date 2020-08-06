const mongoose = require('mongoose')

const dutySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    createdTime: {
        type: String
    },
    updatedTime: {
        type: String
    }
});

const Duty = module.exports = mongoose.model('Duty', dutySchema)