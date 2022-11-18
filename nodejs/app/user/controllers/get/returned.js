const {query} = require("../../../../database/connection/query");
module.exports = async (req, res) => {
    res.render('./pages/user/returned.ejs',{
        title:"User Orders",
        info:req.session
    })
}