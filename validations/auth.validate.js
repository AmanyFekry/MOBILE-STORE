const joi = require("joi")
const passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

module.exports = {
    registerationSchema: joi.object().keys({
        name: joi.string().min(3).max(30).required().messages({ "string.required": "Name is requires" }),
        email: joi.string().email().lowercase().trim().required().messages({ "any.required": "Email is requires", "string.email":"Invalid Email"}),
        password: joi.string().regex(passwordExp).required().messages({ "any.required": "Password is requires" }),
        address: joi.string().min(3).max(30).required().messages({ "any.required": "Name is requires" }),
        nationalId: joi.number().required().messages({ "any,required": "Name is requires" }),
       phone: joi.string().min(11).max(13).required().messages({ "any.required": "Name is requires" }),

         
    })
}