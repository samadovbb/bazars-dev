const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res)=> {
   let { phone, counts, seconds } = res.app.get('attempt')
    let msg = ''

    if(counts > 4){
        await query('update bazars.Customer set StatusID = ? where PhoneNumber = ?',
            ['7A084FA3', phone])
        msg = 'Sizning telefon raqamingiz blocklandi.'
    }

    res.render('./pages/sign/sms_verify.ejs', {
        second:seconds,
        phone: phone,
        msg
    })
}