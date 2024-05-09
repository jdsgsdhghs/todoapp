const mongoose = require('mongoose')

const todoschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('todolist', todoschema);