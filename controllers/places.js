// // creating a router
// const router = require('express').Router()
// const places = require('../models/places.js') // index.jsx line# 6

// // Index page
// router.get('/', (req, res) => {
//     res.render('places/index', {places})
// });

// // New page
// router.get('/new', (req, res) => {
//   res.render('places/new')
// })

// // Create page
// router.post('/', (req, res) => {
//   console.log(req.body)
//   if (!req.body.pic) {
//       req.body.pic = '/images/dining.jpeg'
//   }
//   if (!req.body.city) {
//       req.body.city = 'Somewhere'
//   }
//   if (!req.body.state) {
//       req.body.state = 'USA'
//   }
//   places.push(req.body)
//   res.redirect('/places')
// })

// // EDIT/DELETE page (UPDATE)
// router.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   } else if (!places[id]){
//     res.render('error404')
//   } else {
//     res.render('places/show', {place: places[id], id})
//   }
// })
// // EDIT button page
// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   } else if (!places[id]){
//     res.render('error404')
//   } else {
//     res.render('places/edit', {place: places[id], id})
//   }
// })

// // DELETE page
// router.delete('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//       places.splice(id, 1)
//       res.redirect('/places')
//   }
// })

// // REPLACE item
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
//           req.body.pic = '/images/dining.jpeg'
//       }
//       if (!req.body.city) {
//           req.body.city = 'Somewhere'
//       }
//       if (!req.body.state) {
//           req.body.state = 'USA'
//       }

//       // Save the new data into places[id]
//       places[id] = req.body
//       res.redirect(`/places/${id}`)
//   }
// })

// // to import router to other files
// module.exports = router

// creating a router
const router = require('express').Router()
const db = require('../models')

// INDEX Page
router.get('/', (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render('places/index', {places}) //renders to index page
    })
    .catch(error => {
      console.log(error)
      res.render('error404')
    })
})
// CREATE NEW Page
router.post('/', (req, res) => {
  // res.send('POST /places stub')
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(error => {
      console.log('error', error)
      res.render('error404')
    })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})
// EDIT/DELETE page (UPDATE)
router.get('/:id', (req, res) => {
  // res.send('GET /places/:id stub')
  db.Place.findById(req.params.id)
    .then(place => {
      res.render('places/show', {place})
    })
    .catch(error => {
      console.log('error', error)
      res.render('error404')
    })
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})
// DELETE 
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
