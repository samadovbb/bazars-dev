const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res, next)=>{
    try{
        let {PhoneNumber, VerifyCode} = req.body

        let result = await query('select AttemptID from bazars_business.Attempts where PhoneNumber = ? and Code = ?',
            [PhoneNumber, VerifyCode])

        if(result.err || result.length === 0)
            return res.status(400).json({success:0, message:"Your verify code is invalid!"})

        req.session.verify = true
        res.status(200).json({success:1, message:"Success"})
    }catch (err){
        next(err)
    }
}