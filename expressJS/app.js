  const express = require('express')

  const bodyParser = require('body-parser')

  const app = express()

  app.use(bodyParser.json())

  app.use(bodyParser.urlencoded({extended: false}))

  app.get('/add-products', (req, res) => {
    res.send('<form action="/products" method="POST"><input type="text" name="title"> <button type="submit">Add Product</form>')
  })

  app.post('/products', (req, res) => {
    console.log(req.body)
    res.redirect('/')
  })

  app.get('/', (req, res, next) => {
    res.send('Root page')
    // next() Allows middleware to continue to the next middleware
  })



  app.listen(3333, console.log('Connected'))
