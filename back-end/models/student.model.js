const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    // createdTime: {
    //     type: String,
    //     required: true
    // }
    
});

const Student = module.exports = mongoose.model('Student', studentSchema)