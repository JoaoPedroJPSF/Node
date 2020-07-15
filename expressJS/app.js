  const path = require('path')

  const express = require('express')

  const adminRoutes = require('./routes/admin')

  const shopRoutes = require('./routes/shop')

  const bodyParser = require('body-parser')

  const app = express()

  app.use(bodyParser.json())

  app.use(bodyParser.urlencoded({extended: false}))

  app.use(adminRoutes) // All routes with /admin will respond to this settings

  app.use(shopRoutes)

  app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, './', 'views', 'page-not-found.html'))
    console.log('404 error')
  })

  app.listen(3333, console.log('Connected'))
