module.exports = async (req, res) => {
    res.render('./pages/user/wishlist.ejs',{
        title:"Wishlist",
        info:req.session
    })
}