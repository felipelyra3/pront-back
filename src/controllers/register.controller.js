import httpStatus from "http-status";
import loginRepository from "../Repositories/login.repositories.js";
import registerRepository from "../Repositories/register.repositories.js";
import bcrypt from "bcrypt";

async function RegisterUser(req, res) {
    const { name, socialName, gender, birthday, cpf, address, loginType, email, susNumber, phoneNumbers, healthCare, crm, coren, password } = res.locals.body
    try {
        const findUserByCPF = await loginRepository.findOneByCPF(cpf);
        if (findUserByCPF) {
            res.sendStatus(httpStatus.CONFLICT);
            return;
        }

        if (susNumber) {
            const findUserBySusNumber = await loginRepository.findOneBySusNumber(susNumber);
            if (findUserBySusNumber) {
                res.sendStatus(httpStatus.CONFLICT);
            }
        }

        const hashPassword = bcrypt.hashSync(password, 10);

        await registerRepository.insertOneNewUser(name, socialName, gender, birthday, cpf, address, loginType, email, susNumber, phoneNumbers, healthCare, crm, coren, hashPassword);
        res.sendStatus(httpStatus.ACCEPTED);
    } catch (error) {
        res.sendStatus(httpStatus.NOT_FOUND);
    }
}

async function RegisterUserr(req, res) {
    const { name, socialName, gender, birthday, cpf, address, loginType, email, susNumber, phoneNumbers, healthCare, crm, coren, password } = res.locals.body
    try {
        const findUserByCPF = await loginRepository.findOneByCPF(cpf);
        const findUserBySusNumber = "";
        if (susNumber) {
            findUserBySusNumber = await loginRepository.findOneBySusNumber(susNumber);
        }
        if (findUserByCPF || findUserBySusNumber) {
            console.log("CONFLICT");
            res.sendStatus(httpStatus.CONFLICT);
            return;
        }

        //const hashPassword = bcrypt.hashSync(password, 10);

        await registerRepository.insertOneNewUser(name, socialName, gender, birthday, cpf, address, loginType, email, susNumber, phoneNumbers, healthCare, crm, coren, password);
        res.sendStatus(httpStatus.ACCEPTED);
    } catch (error) {
        res.sendStatus(httpStatus.NOT_FOUND);
    }
}

export { RegisterUser };