const mongoose = require('mongoose')
const productSchema = require('./schema')

const COLLECTION_NAME = 'list-music'
const MODEL_NAME = 'listMusic'

const modelProduct = mongoose.model(MODEL_NAME, productSchema, COLLECTION_NAME)

// modelProduct.countDocuments()
// modelProduct.find()
// modelProduct.findOne()
// modelProduct.create()
// modelProduct.findByIdAndUpdate()
// modelProduct.findByIdAndRemove()


// modelProduct.collection.dropIndex("title_text", function(err, data) {
//     console.log(err);
//     console.log(data);
// })



// modelProduct.collection.createIndex({ title: "text", author: 'text' }, function(err, data) {
//     console.log(err);
//     console.log(data);
// })

module.exports = modelProduct