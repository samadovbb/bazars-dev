module.exports = async (req, res) => {
    res.render('./pages/errors/404.ejs',{
        title:"Page Not Found",
        info:req.session
    })
}