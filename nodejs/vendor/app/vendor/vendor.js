const express = require('express')
const app = express.Router()

// dashboard
app.use('/dashboard', require('./dashboard/dashboard'))

// depot
app.use('/depots', require('./depots/depots'))

// products
app.use('/products', require('./products/products'))

module.exports = app