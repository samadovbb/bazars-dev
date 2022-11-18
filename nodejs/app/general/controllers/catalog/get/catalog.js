const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res) => {
    let catalog = await query('select * from bazars_products.Catalog')

    res.render('./pages/catalog/catalog.ejs',{
        title:"Catalogs",
        catalog,
        info:req.session
    })
}