// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for bills
const Bill = require('../models/bill')

// we'll use this to intercept any errors that get thrown and send them
// back to the client with the appropriate status code
const handle = require('../../lib/error_handler')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /bills
router.get('/bills', requireToken, (req, res) => {
  Bill.find()
    .then(bills => {
      const billsOwner = bills.filter(bill => {
        if (JSON.stringify(bill.owner) === JSON.stringify(req.user._id)) {
          return true
        }
      })
      // `bills` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return billsOwner.map(bill => bill.toObject())
    })
    // respond with status 200 and JSON of the bills
    .then(bills => res.status(200).json({ bills: bills }))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

// SHOW
// GET /bills/5a7db6c74d55bc51bdf39793
router.get('/bills/:id', requireToken, (req, res) => {
  // req.params.id will be set based on the `:id` in the route
  Bill.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "bill" JSON
    .then(bill => res.status(200).json({ bill: bill.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

// CREATE
// POST /bills
router.post('/bills', requireToken, (req, res) => {
  // set owner of new bill to be current user
  req.body.bill.owner = req.user.id

  Bill.create(req.body.bill)
    // respond to succesful `create` with status 201 and JSON of new "bill"
    .then(bill => {
      res.status(201).json({ bill: bill.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(err => handle(err, res))
})

// UPDATE
// PATCH /bills/5a7db6c74d55bc51bdf39793
router.patch('/bills/:id', requireToken, (req, res) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.bill.owner

  Bill.findById(req.params.id)
    .then(handle404)
    .then(bill => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, bill)

      // the client will often send empty strings for parameters that it does
      // not want to update. We delete any key/value pair where the value is
      // an empty string before updating
      Object.keys(req.body.bill).forEach(key => {
        if (req.body.bill[key] === '') {
          delete req.body.bill[key]
        }
      })

      // pass the result of Mongoose's `.update` to the next `.then`
      return bill.update(req.body.bill)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

// DESTROY
// DELETE /bills/5a7db6c74d55bc51bdf39793
router.delete('/bills/:id', requireToken, (req, res) => {
  Bill.findById(req.params.id)
    .then(handle404)
    .then(bill => {
      // throw an error if current user doesn't own `bill`
      requireOwnership(req, bill)
      // delete the bill ONLY IF the above didn't throw
      bill.remove()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

module.exports = router
