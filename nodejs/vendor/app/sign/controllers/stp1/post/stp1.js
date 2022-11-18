const Vendor = require('../../../models/Vendor')
const {query} = require('../../../../../database/connection/query')
const sendSMS = require('../../../../general/helpers/send_sms')

module.exports = async (req, res, next)=>{
    try{
        let data = req.body
        const confirm = data.ConfirmPassword
        delete data.ConfirmPassword
        const {error, value} = Vendor.validate(req.body)

        if(error) return res.status(400).json({success: 0, message: error.details[0].message})

        if(value.Password != confirm) return res.status(400).json({success:0, message:"Please confirm the password!"})

        let result = await query('insert into bazars_business.Vendors (Login, Password, PhoneNumber, Email) values(?,?,?,?)',
            [...Object.values(value)])

        if(result.err) return res.status(400).json({success:0, data:result.errdata})

        const verifyCode = Math.floor(1000 + Math.random() * 9000);
        await sendSMS(value.PhoneNumber, `Bazars Vendor. \n\nYour verification code is ${verifyCode}. You're welcome!`)
        await query('insert into bazars_business.Attempts (PhoneNumber, Code) values(?, ?)',
            [value.PhoneNumber, verifyCode])

        req.session.step = 1

        res.status(200).json({success:1, message:"Success! Please enter the verify code"})
    }catch (err){
        next(err)
    }
}