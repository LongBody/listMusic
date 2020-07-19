const express = require('express')
const categoryHandlers = require('../modules/categories')

const router = new express.Router()

router.get('/', categoryHandlers.findMany)

router.get('/find', categoryHandlers.searchCategories)

router.get('/:id', categoryHandlers.findOne)

router.post('/', categoryHandlers.create)

router.put('/', categoryHandlers.update)

router.delete('/:id', categoryHandlers.delete)


module.exports = router