import joi from "joi";

const updateSchema = joi.object({
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
    _id: joi.string().empty().required(),
});

const vaccineSchema = joi.object({
    healthUnit: joi.string().empty().required(),
    cnes: joi.string().empty().required(),
    batch: joi.string().empty().required(),
    manufacturer: joi.string().empty().required(),
    vaccinator: joi.string().empty().required(),
    date: joi.date().empty().required(),
    _id: joi.string().empty().required(),
});

const allergySchema = joi.object({
    allergies: joi.array().items(joi.string()).empty().required(),
    _id: joi.string().empty().required(),
});

const examSchema = joi.object({
    examType: joi.string().empty().required(),
    place: joi.string().empty().required(),
    link: joi.string().uri().empty(),
    result: joi.string().empty().required(),
    _id: joi.string().empty().required(),
});

export { updateSchema, vaccineSchema, allergySchema, examSchema };