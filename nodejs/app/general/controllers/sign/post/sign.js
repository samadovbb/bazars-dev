const {query} = require("../../../../../database/connection/query");
const Person = require("../../../models/Person");
const send_sms = require("../../../additional/send_sms");

module.exports = async (req, res)=> {
    const {value, error} = Person.validate(req.body)

    if(error)
        return res.redirect(`/sign?err=${error.details[0].message}`)

    const { PhoneNumber } = value
    const verifyCode = Math.floor(1000 + Math.random() * 9000);

    let attemptID = await query('call bazars.sp_sign(?,?)', [PhoneNumber, verifyCode])

    if(attemptID.err || !attemptID[0][0]?.attemptID)
        return res.redirect(`/sign?err=${attemptID.errData || "error"}`)

    let ImagePath = attemptID[0][0]?.ImagePath
    attemptID = attemptID[0][0]?.attemptID

    await send_sms(PhoneNumber, `Bazars.uz \n\nYour verification code: ${verifyCode}`)

    res.app.set(`attempt`, {attemptID, ImagePath, PhoneNumber, counts:0, seconds: 89})

    res.redirect('/sign/sms_validation')
}