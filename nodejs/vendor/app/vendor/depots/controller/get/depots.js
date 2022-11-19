const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res)=>{
    let result = await query('select * from bazars_business.Depot')
    res.render('./vendor/depots/depots.ejs',{
        data:result
    })
}