import joi from "joi";

const registerSchema = joi.object({
    name: joi.string().min(3).max(255).empty().required(),
    socialName: joi.string().min(3).max(255).empty().required(),
    gender: joi.string().valid("mulherCis", "homemCis", "mulherTrans", "homemTrans", "outros").empty().required(),
    birthday: joi.date().empty().required(),
    cpf: joi.string().empty().length(11).required(),
    email: joi.string().email(),
    susNumber: joi.string().min(3),
    phoneNumbers: joi.array().items(joi.string().min(10)),
    address: joi.object({
        cep: joi.string().length(8).empty().required(),
        city: joi.string().min(3).empty().required(),
        neighborhood: joi.string().min(3).empty().required(),
        number: joi.string().min(1).empty().required(),
        state: joi.string().length(2).empty().required(),
        street: joi.string().min(3).empty().required()
    }).empty().required(),
    healthCare: joi.object({
        plan: joi.string().min(3).empty().required(),
        planNumber: joi.string().min(3).empty().required()
    }),
    crm: joi.string().min(3),
    coren: joi.string().min(3),
    loginType: joi.string().valid("doctor", "nurse", "recepcionist", "patient").empty().required(),
    password: joi.string().empty().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

export { registerSchema };