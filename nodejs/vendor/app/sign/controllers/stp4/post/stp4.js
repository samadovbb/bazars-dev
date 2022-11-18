const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res, next) => {
    try {
        let data = req.body
        for (let i = 0; i < data.length; i++) {
            await query('insert into bazars_business.Invoices (BankName, MFO, InvoiceNumber, InvoiceName) values(?,?,?,?)',
                [...Object.values(data[i])])
        }

        req.session.isAuth = true
        req.session.VendorID = 'AABB'

        res.status(200).json({success:1, message:"You are welcome!"})
    }catch (err){
        next(err)
    }
}