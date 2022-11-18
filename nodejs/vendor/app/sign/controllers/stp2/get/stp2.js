module.exports = async (req, res, next) => {
    try{
        // if(!req.session.verify)
        //     return res.redirect('/sign/stp1')
        res.render('sign/stp2.ejs')
    }catch (err){
        next(err)
    }
}