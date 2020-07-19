const mongoose = require('mongoose')
const categorySchema = require('./schema')

const COLLECTION_NAME = 'categories'
const MODEL_NAME = 'categories'

const categoryModel = mongoose.model(MODEL_NAME, categorySchema, COLLECTION_NAME)

// modelProduct.countDocuments()
// modelProduct.find()
// modelProduct.findOne()
// modelProduct.create()
// modelProduct.findByIdAndUpdate()
// modelProduct.findByIdAndRemove()

// categoryModel.collection.createIndex({ title: "text" }, function(err, data) {
//     console.log(err);
//     console.log(data);
// })

module.exports = categoryModel