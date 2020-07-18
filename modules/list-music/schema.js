const mongoose = require('mongoose')
const Schema = mongoose.Schema


// String, Number, Boolean, Date, Object, Array , ObjectId



const productSchema = new Schema({
    description: String,
    author: {
        text: false,
        type: String,
        required: true,

    },
    title: String,
    categories: [{
        type: mongoose.Types.ObjectId,
        ref: 'categories'
    }],
    imageLink: {
        type: String,
        required: true
    },
    musicLink: {
        type: String,
        required: true
    },

})



// productSchema.index({ title: 'text', author: 'text' }, function(err, data) {
//     console.log(err);
//     console.log(data);
// })

module.exports = productSchema