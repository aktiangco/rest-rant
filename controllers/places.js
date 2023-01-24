// creating a router
const router = require('express').Router()


router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/curry.avif'
      }, {
        name: 'Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/catcafe.jpeg'
      }, {
        name: 'Manila Turo Turo',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Asian Fusion, Filipino',
        pic: '/images/filipinoFood.jpeg'
      }, {
        name: 'Wasabi Yo!',
        city: 'San Francisco',
        state: 'CA',
        cuisines: 'Sushi Bar, Japanese',
        pic: '/images/sushiFood.jpeg'
      }
    ]    
    res.render('places/index', {places})
});



// to import router to other files
module.exports = router