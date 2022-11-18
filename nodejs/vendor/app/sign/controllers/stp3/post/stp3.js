const RegisterModel = require('../../../models/RegisterModel')
const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res, next)=>{
    try{
        const data = req.body
        const {error, value} = RegisterModel.validate(data)

        if(error) return res.status(400).json({success:0, message:error.details[0].message})

        await query('insert into bazars_business.RegisterInfo (Personality, Firstname, Lastname, MiddleName, STIR, PIN, CertificateNumber, IFUTCode, Address) values (?,?,?,?,?,?,?,?,?)',
            [...Object.values(value)])
        res.status(200).json({success:1,  data: "Good job"})
    }catch (err){
        next(err)
    }
}