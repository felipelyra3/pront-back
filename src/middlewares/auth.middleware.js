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

        next();
    } catch (error) {
        res.sendStatus(httpStatus.UNPROCESSABLE_ENTITY);
    }
}

export { LoginTypeAuth };