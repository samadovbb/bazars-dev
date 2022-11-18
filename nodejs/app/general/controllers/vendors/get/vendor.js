module.exports = async (req, res)=>{
    res.render('./pages/vendors/vendor.ejs', {
        title:"Vendor A",
        info : req.session
    })
}