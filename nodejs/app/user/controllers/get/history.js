const {query} = require("../../../../database/connection/query");
module.exports = async (req, res) => {
    res.render('./pages/user/history.ejs',{
        title:"Order history",
        info:req.session
    })
}