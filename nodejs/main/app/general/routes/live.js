const express = require('express')
const app = express.Router()

app.get('/', async (req, res)=>{
    res.render('./pages/productList/live.ejs',{
        info:req.session
    })
})

app.get('/show', async (req, res)=> {
    res.render('./pages/productList/live_show.ejs',{
        info:req.session
    })
})

module.exports = app