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
      }, {
        name: 'Tacos Fernandez',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Taco, Mexican',
        pic: '/images/taco.png'
      }, {
        name: 'Bobs Burger',
        city: 'Austin',
        state: 'TX',
        cuisines: 'Burgers, American(Traditional)',
        pic: '/images/burgers.webp'
      }
    ]    
    res.render('places/index', {places})
});



// to import router to other files
module.exports = router