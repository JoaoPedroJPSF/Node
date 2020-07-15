  const path = require('path')

  const rootDir = require('../utils/path')

  const express = require('express')

  const router = express.Router()

  router.get('/admin/add-product', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  })

  router.post('/add-products', (req, res) => {
    console.log(req.body)
    res.redirect('/')
  })

  module.exports = router
