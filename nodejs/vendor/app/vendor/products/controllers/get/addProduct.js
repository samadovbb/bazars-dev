const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res) => {
    let depot = await query('select * from bazars_business.Depot where VendorID = ?',
        [req.session.VendorID])
    let categories = await query('select * from bazars_products.Categories')
    res.render('./vendor/products/addProduct.ejs', {
        depot, categories
    })
}