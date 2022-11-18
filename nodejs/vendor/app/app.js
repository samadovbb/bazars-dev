const express = require('express')
const app = express.Router()

// use functions
app.use(require('./general/middlewares/use'))

// register && login
app.use('/sign', require('./sign/sign'))

// handle errors
app.use(require('./general/helpers/errorHandle'))

module.exports = app