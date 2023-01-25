import joi from "joi";

const loginSchema = joi.object({
    cpf: joi.string().empty().length(11).required(),
    password: joi.string()
        .empty()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
});

const tokenSchema = joi.object({
    token: joi.string().empty().required(),
    logintype: joi.string().empty().required(),
});

export { loginSchema, tokenSchema };