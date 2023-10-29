require('dotenv').config()
const mongoose = require('mongoose')

const uri = process.env.MONGO_URI

const connectToDb = async () => {
    mongoose.connect(uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then((val)=>{
        console.log('connected')
    })
    .catch((error)=>{
        console.log(error.message)
    })
}

module.exports = {
    connectToDb
}