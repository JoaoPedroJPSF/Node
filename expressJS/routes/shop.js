  const express = require('express')

  const router = express.Router()



  router.get('/', (req, res, next) => {
    res.send('Root page')
    // next() Allows middleware to continue to the next middleware
  })

  module.exports = router
