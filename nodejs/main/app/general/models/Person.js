const Joi = require("joi");

const Person = Joi.object().keys({

    Lastname: Joi.string()
        .trim()
        .optional()
        .allow('')
        .min(5)
        .max(50),

    Firstname: Joi.string()
        .trim()
        .min(4)
        .max(50)
        .optional()
        .allow(''),

    MiddleName: Joi.string()
        .trim()
        .min(5)
        .max(50)
        .optional()
        .allow(''),

    Gender: Joi.string()
        .trim()
        .valid('Male', 'Female')
        .optional()
        .allow(''),

    BirthDate: Joi.date()
        .iso()
        .optional()
        .empty(''),

    PhoneNumber : Joi.string()
        .trim()
        .length(12)
        .regex(/^[0-9]+$/)
        .optional()
        .allow(''),

    ImagePath:Joi.string()
        .optional()
        .allow('')
})

module.exports = Person