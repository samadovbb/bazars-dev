module.exports = async (req, res)=>{
    res.render('./pages/vendors/product.ejs',{
        title:"Product A",
        info:req.session
    })
}