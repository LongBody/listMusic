const mongoose = require('mongoose')
const userProfileSchema = require('./schema')

const COLLECTION_NAME = 'user-profiles'
const MODEL_NAME = 'user-profiles'

const userProfileModel = mongoose.model(MODEL_NAME, userProfileSchema, COLLECTION_NAME)


// modelProduct.countDocuments()
// modelProduct.find()
// modelProduct.findOne()
// modelProduct.create()
// modelProduct.findByIdAndUpdate()
// modelProduct.findByIdAndRemove()


module.exports = userProfileModel