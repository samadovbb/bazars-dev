module.exports = async (req, res)=>{
    let data = req.body
    console.log(data)
    res.redirect('/vendor/products/')
}