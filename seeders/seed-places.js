const db = require('./models')

db.Place.create(
    [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/curry.avif',
    founded: 1989
}, {
    name: 'Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/catcafe.jpeg',
    founded: 2020
}, {
    name: 'Manila Turo Turo',
    city: 'Las Vegas',
    state: 'NV',
    cuisines: 'Asian Fusion, Filipino',
    pic: '/images/filipinoFood.jpeg',
    founded: 1987
}, {
    name: 'Wasabi Yo!',
    city: 'San Francisco',
    state: 'CA',
    cuisines: 'Sushi Bar, Japanese',
    pic: '/images/sushiFood.jpeg',
    founded: 1995
}, {
    name: 'Tacos Fernandez',
    city: 'San Diego',
    state: 'CA',
    cuisines: 'Taco, Mexican',
    pic: '/images/taco.png',
    founded: 2006
}, {
    name: 'Bobs Burger',
    city: 'Austin',
    state: 'TX',
    cuisines: 'Burgers, American(Traditional)',
    pic: '/images/burgers.webp',
    founded: 2011
    }      
    ]
)
    
    
    
    .then(() => {
        console.log('Success!')
        process.exit()
    })
    .catch(err => {
        console.log('Failure!', err)
        process.exit()
})