//Validation
const Joi = require('@hapi/joi');

//User Validation
const registerValidation = async(params) => {

    const userSchema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });

    //Validate input request.
    try {
        const { value } = await userSchema.validateAsync(params);
        return value;
    } catch (err) {
        return err.details[0].message;
    }
}

//Login Validation
const loginValidation = async(params) => {

    const userSchema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });

    //Validate input request.
    try {
        const { value } = await userSchema.validateAsync(params);
        return value;
    } catch (err) {
        return err.details[0].message;
    }
}
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;