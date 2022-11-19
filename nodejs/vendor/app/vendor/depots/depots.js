const express = require('express')
const app = express.Router()

// list of depots
app.get('/', require('./controller/get/depots'))

// add depot
app.post('/', require('./controller/post/depot'))

module.exports = app