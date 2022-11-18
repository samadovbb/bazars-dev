module.exports = async (req, res)=>{
    res.render('./pages/vendors/vendors.ejs', {
        title:"Vendor list",
        info:req.session
    })
}