const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res)=> {
    let data = await query(`select CatalogID, c.CategoryID, CategoryName, SubcategoryID, Subcategory
from bazars_products.Categories c
left join bazars_products.Subcategories s on c.CategoryID = s.CategoryID order by c.CategoryID;`);

    let check = []
    let result = []

    for(let i = 0; i < data.length; i++){
        // TODO   need to change algorithm
        if(check.includes(data[i].CategoryID))
            continue;
        check.push(data[i].CategoryID)
        let dt = {categoryID:data[i].CategoryID, category:data[i].CategoryName, subcategories:[data[i].Subcategory]}
        for (let j = i + 1; j < data.length; j++) {
            if (data[j].Subcategory)
                dt.subcategories.push(data[j].Subcategory)
        }
        result.push(dt)
    }

    res.render('index.ejs', {
        title:"Bazars",
        info:req.session,
        data:result
    })
}