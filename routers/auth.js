const express = require('express')
const authModule = require('../modules/auth')

const authRouter = new express.Router()

authRouter.post('/', authModule.createUser)

authRouter.get('/', authModule.logIn)


module.exports = authRouter