const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res)=> {
    const catalogID = req.params.id
    let categories = await query('select * from bazars_products.Categories where CatalogID = ?',
        [catalogID])

    res.render('./pages/catalog/productList.ejs',{
        title:"Categories", categories,
        info:req.session
    })
}