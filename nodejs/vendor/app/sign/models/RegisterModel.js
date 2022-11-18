const Joi = require('joi')

const RegisterModel = Joi.object().keys({
    Personality: Joi.string()
        .valid('entity', 'person'),

    Firstname : Joi.string()
        .trim()
        .max(50)
        .min(4)
        .allow('')
        .when('Personality', {is:'person', then:Joi.required()} ),

    Lastname : Joi.string()
        .trim()
        .max(50)
        .min(4)
        .allow('')
        .when('Personality', {is:'person', then:Joi.required()} ),

    MiddleName : Joi.string()
        .trim()
        .max(50)
        .min(4)
        .allow('')
        .when('Personality', {is:'person', then:Joi.required()} ),

    STIR : Joi.string()
        .max(20)
        .trim()
        .pattern(new RegExp('^[0-9]')),

    PIN : Joi.string()
        .max(20)
        .trim()
        .allow('')
        .pattern(new RegExp('^[0-9]')),

    IFUTCode : Joi.string()
        .max(10)
        .trim()
        .allow('')
        .pattern(new RegExp('^[0-9]'))
        .when('Personality', {is:'entity', then:Joi.required()} ),

    Address : Joi.string()
        .when('Personality', {is:'entity', then:Joi.required()} )
        .max(30)
        .allow('')
        .trim(),

    CertificateNumber : Joi.string()
        .max(10)
        .trim()
        .allow('')
        .pattern(new RegExp('^[0-9]')),
})

module.exports = RegisterModel