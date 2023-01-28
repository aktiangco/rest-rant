// creating a router
const router = require('express').Router()
const places = require('../models/places.js') // index.jsx line# 6

// Index page
router.get('/', (req, res) => {
    res.render('places/index', {places})
});

// New page
router.get('/new', (req, res) => {
  res.render('places/new')
})

// Create page
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

// EDIT/DELETE page (UPDATE)
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]){
    res.render('error404')
  } else {
    res.render('places/show', {place: places[id], id})
  }
})
// EDIT button page
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]){
    res.render('error404')
  } else {
    res.render('places/edit', {place: places[id]})
  }
})

// DELETE page
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      places.splice(id, 1)
      res.redirect('/places')
  }
})

// REPLACE item
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      res.redirect(`/places/${id}`)
  }
})

// router.put('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//       // Dig into req.body and make sure data is valid
//       if (!req.body.pic) {
//           // Default image if one is not provided
//           req.body.pic = 'http://placekitten.com/400/400'
//       }
//       if (!req.body.city) {
//           req.body.city = 'Anytown'
//       }
//       if (!req.body.state) {
//           req.body.state = 'USA'
//       }

//       // Save the new data into places[id]
//       places[id] = req.body
//       res.redirect(`/places/${id}`)
//   }
// })





// to import router to other files
module.exports = router
