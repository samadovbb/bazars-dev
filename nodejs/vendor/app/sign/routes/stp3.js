const express = require('express')
const app = express.Router()

app.get('/', require('../controllers/stp3/get/stp3'))

app.post('/', require('../controllers/stp3/post/stp3'))

module.exports = app