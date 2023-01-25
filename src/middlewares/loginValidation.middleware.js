import { loginSchema, tokenSchema } from "../Schemas/login.schema.js";
import httpStatus from "http-status";

async function LoginSchemaValidation(req, res, next) {
    const validation = await loginSchema.validate(req.body, {
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

async function TokenSchemaValidation(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
    const headers = {
        token: token,
        logintype: req.headers.logintype,
    }

    const validation = await tokenSchema.validate(headers, {
        abortEarly: false,
    });
    if (validation.error) {
        const errors = validation.error.details.map((error) => error.message);
        res.status(httpStatus.UNPROCESSABLE_ENTITY).send({ message: errors });
        return;
    }

    res.locals.token = token;
    res.locals.logintype = req.headers.logintype;
    next();
}

export { LoginSchemaValidation, TokenSchemaValidation };