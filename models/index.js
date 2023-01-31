const mongoose = require('mongoose')

// CONNECT TO MONGO
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })

  module.exports.Place = require('./places')