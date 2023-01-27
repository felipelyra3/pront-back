import httpStatus from "http-status";
import loginRepository from "../Repositories/login.repositories.js";

async function LoginTypeAuth(req, res, next) {
    try {
        if (!req.headers.authorization || !req.headers.logintype) {
            res.sendStatus(httpStatus.UNAUTHORIZED);
            return;
        }

        const token = req.headers.authorization?.replace("Bearer ", "");
        const loginType = req.headers.logintype;
        const session = await loginRepository.findOneCheckSessionLoginType(token, loginType);

        if (!session) {
            res.sendStatus(httpStatus.UNAUTHORIZED);
            return;
        }

        res.locals.token = token;
        res.locals.logintype = loginType;

        next();
    } catch (error) {
        res.sendStatus(httpStatus.UNPROCESSABLE_ENTITY);
    }
}

async function LoginTypeBlock(req, res, next) {
    if (req.headers.logintype !== "admin" && req.headers.logintype !== "doctor" && req.headers.logintype !== "nurse" && req.headers.logintype !== "recepcionist") {
        res.sendStatus(httpStatus.UNAUTHORIZED);
    }

    next();
}

export { LoginTypeAuth, LoginTypeBlock };