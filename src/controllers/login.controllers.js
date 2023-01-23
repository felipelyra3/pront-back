import loginRepository from "../Repositories/login.repositories.js";
import { loginSchema, tokenSchema } from "../Schemas/login.schema.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import httpStatus from "http-status";

async function Login(req, res) {
    const user = await loginRepository.findOneByCPF(req.body.cpf);
    if (!user) {
        res.status(422).send('CPF ou senha inválidos');
        return;
    }

    try {
        await loginSchema.validateAsync(req.body);
        const compare = await bcrypt.compareSync(req.body.password, user.password);
        if (compare) {
            const token = uuidv4();
            const editedUser = {
                userId: user._id,
                name: user.name,
                socialName: user.socialName,
                cpf: user.cpf,
                loginType: user.loginType,
                birthDate: user.birthDate,
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
        await tokenSchema.validateAsync(req.body);
        const session = await loginRepository.findOneByToken(req.body.token);
        if (session) {
            res.status(httpStatus.OK).send(session);
        } else {
            res.sendStatus(httpStatus.UNAUTHORIZED);
        }
    } catch (error) {
        res.status(422).send(error.details.map((detail) => detail.message));
    }
}

export { Login, CheckToken };
