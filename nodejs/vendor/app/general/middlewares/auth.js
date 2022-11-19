module.exports = async (req, res, next) => {
    const { session } = req

    if(session && session.isAuth && session.VendorID) {
        return next()
    }

    res.redirect('/login')
}