const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res)=>{
    let products = await query('select * from bazars_business.Products whre VendorID = ?',
        [req.session.VendorID])
    res.render('./vendor/products/productList.ejs')
}