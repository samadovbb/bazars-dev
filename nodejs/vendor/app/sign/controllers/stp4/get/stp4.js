module.exports = async (req, res) => {
    req.session.isAuth = true
    req.session.VendorID = 'AABB'
    return res.redirect('/vendor/dashboard')
    res.render('./sign/stp4')
}