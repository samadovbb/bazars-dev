const Person = require('../../general/models/Person')
const Joi = require('joi')

const User = Person.keys({
    AdditionalPhoneNumber : Joi.string()
        .length(12)
        .pattern(new RegExp('^[0-9]'))
        .allow(''),

    Email: Joi.string()
        .allow('')
        .email(),

    password : Joi.string()
        .trim()
        .min(6)
        .allow(''),
})

module.exports = User