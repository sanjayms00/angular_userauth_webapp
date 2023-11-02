require('dotenv').config()
require('./config/database').connectToDb()    //connect to database

const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT
const path = require('path')


//routes
const adminRoute = require('./routes/adminRoute')
const clientRoute = require('./routes/clientRoute')

//use for all the routes.
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
  }));


// app.use(express.static('views/'))
app.use('/images',express.static('views'));

//mount the routes
app.use('/', clientRoute)
app.use('/admin/', adminRoute)

//listen to the port
app.listen(port, (error)=>{
    if(!error){
        console.log(`connected to : http://localhost:${port}`)
    }else{
        console.log('server connection failed')
    }
})

