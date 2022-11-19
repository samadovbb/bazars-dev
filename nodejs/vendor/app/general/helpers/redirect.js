module.exports = path => {
    return (req, res)=> {
        res.redirect(`/${path}`)
    }
}