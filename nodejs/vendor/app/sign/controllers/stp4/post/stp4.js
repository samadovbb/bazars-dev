const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res, next) => {
    try {
        let data = req.body
        for (let i = 0; i < data.length; i++) {
            console.log([...Object.values(data[i])])
            await query('insert into bazars_business.Invoices (BankName, MFO, InvoiceNumber, InvoiceName) values(?,?,?,?)',
                [...Object.values(data[i])])
        }

        req.session.isAuth = true
        req.session.VendorID = 'AABB'

        res.redirect('/')
    }catch (err){
        next(err)
    }
}