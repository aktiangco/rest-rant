// get the environment variables
require('dotenv').config()
//REQUIRING MONGOOSE
const mongoose = require('mongoose')

// CONNECT TO MONGO
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
// exports models
module.exports.Place = require('./places') 
module.exports.Comment = require('./comments')