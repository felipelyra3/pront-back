import httpStatus from "http-status";
import { registerSchema } from "../Schemas/register.schema.js";

async function RegisterNewUserSchemaValidation(req, res, next) {
    const validation = await registerSchema.validate(req.body, {
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

export { RegisterNewUserSchemaValidation };