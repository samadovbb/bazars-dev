const Person = require('../../../../general/models/Person')
const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res, next) => {
    try {
        let data = req.body
        const {error, value} = Person.validate(data)

        if(error) return res.redirect('/sign/stp2')
        await query('insert into bazars_business.VendorInfo (Lastname, Firstname, MiddleName, Birthdate) values(?,?,?,?)',
            [...Object.values(value)])
        req.session.step = 2

        res.redirect('/sign/stp3')
    }catch (err){
        next(err)
    }
}