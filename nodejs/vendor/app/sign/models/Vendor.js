const Joi = require('joi')

const Vendor = Joi.object().keys({
    Login : Joi.string()
        .trim()
        .max(15)
        .min(4),

    Password : Joi.string()
        .trim()
        .max(50)
        .min(4),

    PhoneNumber : Joi.string()
        .trim()
        .max(13)
        .pattern(new RegExp('^[+0-9]')),

    Email : Joi.string()
        .min(13)
        .max(30)
        .email()
})

module.exports = Vendor