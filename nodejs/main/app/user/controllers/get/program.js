const {query} = require("../../../../database/connection/query");
module.exports = async (req, res) => {
    let user = await query(`select * from bazars.v_get_customers where PhoneNumber = ?;`,
        [req.session.phoneNumber])

    res.render('./pages/user/program.ejs',{
        title:"User Profile",
        info:req.session,
        user:user[0]
    })
}