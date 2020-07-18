const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    description: String
})

module.exports = categorySchema