// module.exports = [
//     {
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/curry.avif'
//   }, {
//     name: 'Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/catcafe.jpeg'
//   }, {
//     name: 'Manila Turo Turo',
//     city: 'Las Vegas',
//     state: 'NV',
//     cuisines: 'Asian Fusion, Filipino',
//     pic: '/images/filipinoFood.jpeg'
//   }, {
//     name: 'Wasabi Yo!',
//     city: 'San Francisco',
//     state: 'CA',
//     cuisines: 'Sushi Bar, Japanese',
//     pic: '/images/sushiFood.jpeg'
//   }, {
//     name: 'Tacos Fernandez',
//     city: 'San Diego',
//     state: 'CA',
//     cuisines: 'Taco, Mexican',
//     pic: '/images/taco.png'
//   }, {
//     name: 'Bobs Burger',
//     city: 'Austin',
//     state: 'TX',
//     cuisines: 'Burgers, American(Traditional)',
//     pic: '/images/burgers.webp'
//   }
// ]

// SCHEMA //

const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true}, 
  pic: { type: String, default: '/images/dining.jpeg'}, 
  cuisines: { type: String, required: true},
  city: { type: String, default: 'The'},
  state: { type: String, default: 'USA' }, 
  founded: {
    type: Number,
    min: [1672, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future!']
  }
})

// Instance Methods Property
placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)


