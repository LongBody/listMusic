const express = require('express')
const listMusicRouter = require('./list-music')
const categoryRouter = require('./categories')
const authRouter = require('./auth')

const router = new express.Router()

router.use('/api/sign-in', authRouter)
router.use('/api/list-music', listMusicRouter)
router.use('/api/categories', categoryRouter)



module.exports = router