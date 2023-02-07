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

// // SHOW page (UPDATE)
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

// // EDIT button 
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

// // delete button
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

// // REPLACE OR UPDATE page
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


// * Creating Router
const router = require('express').Router()
const db = require('../models')

// * INDEX Page
router.get('/', (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render('places/index', {places}) //renders to index page
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})
// * NEW page
router.get('/new', (req, res) => {
  res.render('places/new')
})

// * CREATE NEW Page
router.post('/', (req, res) => {
  // Default image if one is not provided
  if (!req.body.pic) {
          req.body.pic = undefined
      }
      if (!req.body.city) {
          req.body.city = undefined
      }
      if (!req.body.state) {
          req.body.state = undefined
      }
  // res.send('POST /places stub')
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'ValidationError: '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}.`
          message += `${err.errors[field].message}.`
        }
        console.log('Validation error message', message)
        res.render('places/new', {message})
      } else {
        res.render('error404')
      }  
    })
})

// * SHOW page 
router.get('/:id', (req, res) => {
  // res.send('GET /places/:id stub')
  db.Place.findById(req.params.id)
    .populate('comments') // populate comments
    .then(place => {
      console.log(place.comments)
      res.render('places/show', {place})
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})



// * REPLACE OR UPDATE page
router.put('/:id', (req, res) => {
//   if (!req.body.pic) {
//     req.body.pic = undefined
// }
// if (!req.body.city) {
//     req.body.city = undefined
// }
// if (!req.body.state) {
//     req.body.state = undefined
// }
// db.Place.updateOne(req.params.id) // Todo: working on path
// .then(() => {
//   res.redirect('/places')
// })
// .catch(err => {
//   console.log('err', err)
//   res.render('error404')
// }) 
res.send('PUT /places/:id stub')  
})

// * DELETE button
router.delete('/:id', (req, res) => {
  // db.Place.findByIdAndDelete(req.params.id) 
  //   .then(() => {
  //     res.status(303).redirect('/places')
  //   })
  res.send('PUT /places/delete stub')  
})


// * EDIT button
router.get('/:id/edit', (req, res) => {
  // db.Place.findById(req.params.id)
  // .then(() => {
  //   res.render(`/places${req.params.id}`) // Todo: working on path
  // })
  // .catch(err => {
  //   console.log('err', err)
  //   res.render('error404')
  // })
  
  res.send('GET edit form stub')
})

// * POST COMMENT
router.post('/:id/rant', (req, res) => {
  console.log(req.body)
  //using ternary operator for the checkbox
  if (req.body.rant) {
    req.body.rant = true
  } 
  else {
    req.body.rant = false
  }
  db.Place.findById(req.params.id)
    .then(place => {
      // Create comment (Done)
      db.Comment.create(req.body)
        .then(comment => {
      //  Save comment id to place
        place.comments.push(comment.id)
        place.save()
          .then(() => {
          res.redirect(`/places${req.params.id}`)
        })
      })
    })
    .catch(err => {
    res.render('error404')
  })
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')

})

module.exports = router