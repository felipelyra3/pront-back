import httpStatus from "http-status";
import { allergySchema, examSchema, updateSchema, vaccineSchema } from "../Schemas/update.schema.js";

async function UpdateUserSchemaValidation(req, res, next) {
    const validation = await updateSchema.validate(req.body, {
        abortEarly: false,
    });
    if (validation.error) {
        const errors = validation.error.details.map((error) => error.message);
        res.status(httpStatus.UNPROCESSABLE_ENTITY).send({ message: errors });
        return;
    }

    res.locals.body = req.body;
    next();
}

async function VaccineSchemaValidation(req, res, next) {
    const validation = await vaccineSchema.validate(req.body, {
        abortEarly: false,
    });
    if (validation.error) {
        const errors = validation.error.details.map((error) => error.message);
        res.status(httpStatus.UNPROCESSABLE_ENTITY).send({ message: errors });
        return;
    }

    res.locals.body = req.body;
    next();
}

async function AllergySchemaValidation(req, res, next) {
    const validation = await allergySchema.validate(req.body, {
        abortEarly: false,
    });
    if (validation.error) {
        const errors = validation.error.details.map((error) => error.message);
        res.status(httpStatus.UNPROCESSABLE_ENTITY).send({ message: errors });
        return;
    }

    res.locals.body = req.body;
    next();
}

async function ExamSchemaValidation(req, res, next) {
    const validation = await examSchema.validate(req.body, {
        abortEarly: false,
    });
    if (validation.error) {
        const errors = validation.error.details.map((error) => error.message);
        res.status(httpStatus.UNPROCESSABLE_ENTITY).send({ message: errors });
        return;
    }

    res.locals.body = req.body;
    next();
}

export { UpdateUserSchemaValidation, VaccineSchemaValidation, AllergySchemaValidation, ExamSchemaValidation };