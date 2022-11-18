const {query} = require("../../../../../database/connection/query");
module.exports = async (req, res) => {
    const resend = req.query.resend

    if(resend)
        return res.redirect('/sign/')

    const {sms_code, seconds} = req.body

    let {attemptID, ImagePath, PhoneNumber} = res.app.get('attempt')

    let result = await query('call bazars.sp_check_verify_code(?,?)',
        [attemptID, sms_code])

    if(result[0] && result[0].length === 0 || result.err) {
        let attempt = res.app.get('attempt')
        attempt.counts ++
        attempt.seconds = seconds
        res.app.set('attempts', attempt)
        return res.redirect('/sign/sms_validation')
    }

    req.session.isAuth = true
    req.session.account = 'Profile'
    req.session.url = '/user/profile'
    req.session.ImagePath = ImagePath
    req.session.phoneNumber = PhoneNumber

    res.redirect('/')
}