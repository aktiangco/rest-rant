// creating a router
const router = require('express').Router()
const places = require('../models/places.js') // index.jsx line# 6

// Index
router.get('/', (req, res) => {
    res.render('places/index', {places})
});


// New
router.get('/new', (req, res) => {
  res.render('places/new')
})

// // Create
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
      req.body.pic = '/images/dining.jpeg'
  }
  if (!req.body.city) {
      req.body.city = 'Anytown'
  }
  if (!req.body.state) {
      req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

// mikes code
// router.post('/', (req, res) => {
//   console.log(req.body)
//   if (!req.body.pic) {
//       req.body.pic = 'http://placekitten.com/400/400'
//   }
//   if (!req.body.city) {
//       req.body.city = 'Anytown'
//   }
//   if (!req.body.state) {
//       req.body.state = 'USA'
//   }
//   places.push(req.body)
//   res.redirect('/places')
// })

// to import router to other files
module.exports = router
