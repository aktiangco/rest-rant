// creating a router
const router = require('express').Router()
const Places = require('../models/places.js') // index.jsx line# 6

// Index
router.get('/', (req, res) => {
    res.render('places/index', {Places})
});

// Create
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body = '/images/dining.jpeg'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  Places.push(req.body)
  res.redirect('/places')
})

// New
router.get('/new', (req, res) => {
  res.render('places/new')
})






// to import router to other files
module.exports = router
