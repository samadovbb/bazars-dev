const express  = require('express')

const app = express.Router()

// use middlewares
app.use(require('./general/middlewares/use'))

// general routes
app.use('/', require('./general/general'))

// user route
app.use('/user', require('./user/user'))

module.exports = app