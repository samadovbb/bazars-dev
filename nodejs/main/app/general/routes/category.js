const express = require('express')
const app = express.Router()
app.use(express.static('public'))

// all categories
app.get('/', require('../controllers/category/get/categories'))

// category by id
app.get("/:id", require('../controllers/category/get/category'))

module.exports = app