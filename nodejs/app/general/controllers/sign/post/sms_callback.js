const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res)=>{
    const { message_id, user_sms_id, country, phone_number,
        sms_count, status, status_date } = req.body

    await query('insert into bazars.sms_audit (message_id user_sms_id, country, phone_number, sms_count, status, status_date) values (?,?,?,?,?,?,?)',
        [message_id, user_sms_id, country, phone_number,
            sms_count, status, status_date])
    res.status(200).json({success:1, message:"Got it!"})
}