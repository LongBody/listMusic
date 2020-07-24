const mongoose = require('mongoose')
const DB_NAME = 'listMusic'
require('dotenv').config()
const connectionString = process.env.MONGO_KEY
mongoose.set('useCreateIndex', true)
mongoose.connect(
    connectionString, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) {
            console.log('can not be connect with mongo')
            console.log(err)
        } else {
            console.log('connected to MongoDB!')
        }
    }
)