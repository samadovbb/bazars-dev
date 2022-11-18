const express = require('express')
const {PORT} = require('./config/config').app
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(require('./app/app'))

app.listen(PORT, ()=>{
    console.log(`Server has started at =>\nhttp://localhost:${PORT}/`)
})