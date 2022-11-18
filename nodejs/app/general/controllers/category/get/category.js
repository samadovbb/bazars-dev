const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res) => {
    const {id} = req.params

    let category = await query('select * from bazars_products.Categories where CategoryID = ?',
        [id])
    let subcategories = await query('select * from bazars_products.Subcategories where CategoryID = ?',
        [id])

    if(category.err || category.length === 0)
        return res.redirect('/')

    res.render('./pages/category/category.ejs',{
        title:"Category " + category[0].CategoryName,
        info:req.session,
        category:category[0], count:10,
        subcategories
    })
}