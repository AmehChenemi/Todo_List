const joi = require('joi')

const myValidate = joi.object({
    firstName:joi.string()
    .min(3)
    .max(15),

    lastName:joi.string()
    .min(3)
    .max(15),

    email:joi.string()
    .email({
        minDomainSegments:2, 
        tlds:{allow: ['com','net','ng']}
    }),
  
    phoneNumber:joi.string()
    .pattern(new RegExp('^[0-9]'))
    .min(5)
    .max(11),

    userPassword:joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    confirmPassword:joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})

module.exports= {myValidate}