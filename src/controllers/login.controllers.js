import loginRepository from "../Repositories/login.repositories.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import httpStatus from "http-status";

async function Login(req, res) {
    const user = await loginRepository.findOneByCPF(res.locals.body.cpf);
    if (!user) {
        res.sendStatus(httpStatus.UNPROCESSABLE_ENTITY);
        return;
    }

    try {
        const compare = await bcrypt.compareSync(res.locals.body.password, user.password);
        if (compare) {
            const token = uuidv4();
            const editedUser = {
                userId: user._id,
                name: user.name,
                socialName: user.socialName,
                cpf: user.cpf,
                loginType: user.loginType,
                birthday: user.birthday,
                token: token,
            }
            await loginRepository.insertOneNewSession(editedUser);
            res.status(httpStatus.CREATED).send(editedUser);
        } else {
            res.sendStatus(httpStatus.UNAUTHORIZED);
        }
    } catch (error) {
        res.status(422).send(error.details.map((detail) => detail.message));
    }
}

async function CheckToken(req, res) {
    try {
        const session = await loginRepository.findOneByToken(res.locals.token, res.locals.logintype);
        if (session) {
            res.sendStatus(httpStatus.OK);
        } else {
            res.sendStatus(httpStatus.UNAUTHORIZED);
        }
    } catch (error) {
        res.sendStatus(httpStatus.UNAUTHORIZED);
    }
}

async function DeleteSession(req, res) {
    const { token } = res.locals;
    try {
        await loginRepository.findOneAndDeleteSessionByToken(token);
        res.sendStatus(httpStatus.ACCEPTED);
    } catch (error) {
        res.sendStatus(httpStatus.NOT_FOUND);
    }
}

export { Login, CheckToken, DeleteSession };
