// SCHEMA //

const mongoose = require('mongoose')
const comment = require('./comments')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true}, 
  pic: { type: String, default: '/images/dining.jpeg'}, 
  cuisines: { type: String, required: true},
  city: { type: String, default: 'The'},
  state: { type: String, default: 'USA' }, 
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'This is the future!']
  },
  // adding a comment array
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
})

// Instance Methods Property
placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)




