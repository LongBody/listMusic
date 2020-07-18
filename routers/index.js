const express = require('express')
const listMusicRouter = require('./list-music')
const categoryRouter = require('./categories')


const router = new express.Router()

router.use('/api/list-music', listMusicRouter)
router.use('/api/categories', categoryRouter)



module.exports = router