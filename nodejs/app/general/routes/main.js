const express = require('express');
const app = express.Router();

// home page
app.get('/',require('../controllers/main/get/main'));

module.exports = app;