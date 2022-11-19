const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res, next)=>{
    try{
        let {Depot, Location, Description, Status} = req.body
        const VendorID = req.session.VendorID
        await query('insert into bazars_business.Depot (DepotName, Location, Description, Status, VendorID) values (?,?,?,?,?)',
            [Depot, Location, Description, Status, VendorID])

        res.redirect('/vendor/depots')
    }catch (err){
        next(err)
    }
}