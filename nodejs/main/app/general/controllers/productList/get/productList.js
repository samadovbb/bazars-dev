const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res) => {
    const {id} = req.params

    let subcategories = await query('select * from bazars_products.Subcategories where CategoryID = ?',
        [id])
    let brand = await query('select * from bazars_business.Brands')
    let products = await query('select p.* from bazars_business.Product p, bazars_products.Categories c, bazars_products.Subcategories sc where sc.CategoryID = c.CategoryID and sc.SubcategoryID = p.SubcategoryID')

    // console.log(brand, products)
    res.render('./pages/productList/productList.ejs',{
        title:"Products ",
        info:req.session, count:10,
        subcategories, brand, products
    })
}