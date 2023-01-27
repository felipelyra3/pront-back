import httpStatus from "http-status";
import loginRepository from "../Repositories/login.repositories.js";

async function FindUserByCPF(req, res) {
    try {
        const searchCpf = await loginRepository.findOneByCPF(req.params.cpf);
        if (!searchCpf) {
            res.sendStatus(httpStatus.NOT_FOUND);
            return;
        }

        if (searchCpf) {
            if (searchCpf.loginType !== "doctor" && searchCpf.loginType !== "nurse" && searchCpf.loginType !== "recepcionist" && searchCpf.loginType !== "patient") {
                res.sendStatus(httpStatus.UNAUTHORIZED);
                return;
            }
        }

        delete searchCpf.password;

        res.status(httpStatus.OK).send(searchCpf);
    } catch (error) {
        res.sendStatus(httpStatus.NOT_FOUND);
    }
}

async function FindUserBySusNumber(req, res) {
    try {
        const searchSusNumber = await loginRepository.findOneBySusNumber(req.params.susnumber);
        if (!searchSusNumber) {
            res.sendStatus(httpStatus.NOT_FOUND);
            return;
        }

        if (searchSusNumber) {
            if (searchSusNumber.loginType !== "doctor" && searchSusNumber.loginType !== "nurse" && searchSusNumber.loginType !== "recepcionist" && searchSusNumber.loginType !== "patient") {
                res.sendStatus(httpStatus.UNAUTHORIZED);
                return;
            }
        }

        delete searchSusNumber.password;

        res.status(httpStatus.OK).send(searchSusNumber);
    } catch (error) {
        res.sendStatus(httpStatus.NOT_FOUND);
    }
}

export { FindUserByCPF, FindUserBySusNumber };