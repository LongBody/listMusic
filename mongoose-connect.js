const mongoose = require('mongoose')
const DB_NAME = 'listMusic'
const connectionString = 'mongodb+srv://longbody:123@cluster0-gfzv6.gcp.mongodb.net/listMusic?retryWrites=true&w=majority'
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