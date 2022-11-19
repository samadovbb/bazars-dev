const express = require('express')
const app = express.Router()

// use functions
app.use(require('./general/middlewares/use'))

// register && login
app.use('/sign', require('./sign/sign'))

// dashboard
app.use('/vendor', [require('./general/middlewares/auth'), require('./vendor/vendor')])

// redirect to dashboard
app.get('/', require('./general/helpers/redirect')('vendor/dashboard'))

// handle errors
app.use(require('./general/helpers/errorHandle'))

module.exports = app