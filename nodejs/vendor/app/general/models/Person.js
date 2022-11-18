const Joi = require('joi')

const Person = Joi.object().keys({
    Firstname : Joi.string()
        .trim()
        .max(50)
        .min(4)
        .when('isInsert', {is:true, then:Joi.required()} ),

    Lastname : Joi.string()
        .trim()
        .max(50)
        .min(4)
        .when('isInsert', {is:true, then:Joi.required()} ),

    MiddleName : Joi.string()
        .trim()
        .max(50)
        .min(4)
        .when('isInsert', {is:true, then:Joi.required()} ),

    PoneNumber : Joi.string()
        .length(12)
        .pattern(new RegExp('^[0-9]')),

    Birthdate : Joi.date()
        .when('isInsert', {is:true, then:Joi.required()} )
})

module.exports = Person