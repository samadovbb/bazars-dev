module.exports = async (req, res)=>{
    res.render('./pages/user/checkout.ejs',{
        title:"Checkout",
        info:req.session
    })
}