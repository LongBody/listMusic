const mongoose = require('mongoose')
const Schema = mongoose.Schema

const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userProfileSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator(email) {
                let isValidEmail = regexEmail.test(email)
                if (isValidEmail) {
                    return true
                } else {
                    return "Email not valid"
                }
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        enum: ['admin', 'user']
    }]
})

module.exports = userProfileSchema