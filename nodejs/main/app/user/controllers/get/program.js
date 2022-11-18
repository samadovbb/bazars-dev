const {query} = require("../../../../database/connection/query");
module.exports = async (req, res) => {
    res.render('./pages/user/program.ejs',{
        title:"User Orders",
        info:req.session
    })
}