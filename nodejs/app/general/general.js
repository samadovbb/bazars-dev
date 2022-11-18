const express = require('express')
const app = express.Router()

// register, sign in
app.use('/sign', require('./routes/sign'))

// main route
app.use('/', require('./routes/main'))

// catalog
app.use('/catalog', require('./routes/catalog'))

// categories
app.use('/category', require('./routes/category'))

// vendors
app.use('/vendors', require('./routes/vendors'))

module.exports = app