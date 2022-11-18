const User = require('../../models/User')
const {query} = require("../../../../database/connection/query");

module.exports = async (req, res) => {
    const { id } = req.body
    delete req.body.id
    if(req.ImagePath !== '/')
        req.body.ImagePath = req.ImagePath

    const {error, value} = User.validate(req.body)

    if(error)
        return res.redirect(`/user/profile/?message=${error.details[0].message}`)

    const sql = "Update bazars.Customer SET " + Object.keys(value).map(key => `${key} = ?`).join(", ") + " WHERE CustomerID = ?";
    const parameters = [...Object.values(value), id];

    let result = await query(sql, parameters)

    if(result.err)
        return res.redirect(`/user/profile?message=${result.errData}`)

    res.redirect('/user/profile')
}