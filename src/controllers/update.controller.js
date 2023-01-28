import httpStatus from "http-status";
import loginRepository from "../Repositories/login.repositories.js";
import updateRepository from "../Repositories/update.repositories.js";

async function UpdateUserByCPF(req, res) {
    const { _id, name, socialName, gender, birthday, cpf, address, loginType, email, susNumber, phoneNumbers, healthCare, crm, coren } = res.locals.body
    try {
        const findUserByID = await loginRepository.findOneByUserID(_id);
        if (!findUserByID) {
            res.sendStatus(httpStatus.NOT_FOUND);
            return;
        }

        await updateRepository.updateOneNewUser(_id, name, socialName, gender, birthday, cpf, address, loginType, email, susNumber, phoneNumbers, healthCare, crm, coren);

        res.statusStatus(httpStatus.OK);
    } catch (error) {
        res.sendStatus(httpStatus.NOT_FOUND);
    }
}

async function AddNewVaccine(req, res) {
    const { _id, healthUnit, cnes, batch, manufacturer, vaccinator, date } = res.locals.body;
    try {
        const findUserByID = await loginRepository.findOneByUserID(_id);
        if (!findUserByID) {
            res.sendStatus(httpStatus.NOT_FOUND);
            return;
        }

        const newVaccine = {
            healthUnit,
            cnes,
            batch,
            manufacturer,
            vaccinator,
            date
        }

        if (findUserByID.vaccines) {
            findUserByID.vaccines.push(newVaccine);
            await updateRepository.updaneOneNewVaccine(_id, findUserByID.vaccines);
        } else {
            const vaccines = [newVaccine];
            await updateRepository.updaneOneNewVaccine(_id, vaccines);
        }

        res.status(httpStatus.OK).send(findUserByID);
    } catch (error) {
        res.sendStatus(httpStatus.NOT_FOUND);
    }
}

async function AddNewAllergy(req, res) {
    const { _id, allergies } = res.locals.body;
    try {
        const findUserByID = await loginRepository.findOneByUserID(_id);
        if (!findUserByID) {
            res.sendStatus(httpStatus.NOT_FOUND);
            return;
        }

        if (findUserByID.allergies) {
            for (let i = 0; i < allergies.length; i++) {
                findUserByID.allergies.push(allergies[i]);
            }
            updateRepository.updaneOneNewAllergy(_id, findUserByID.allergies);
        } else {
            updateRepository.updaneOneNewAllergy(_id, allergies);
        }

        res.status(httpStatus.OK).send(findUserByID);
    } catch (error) {
        res.sendStatus(httpStatus.NOT_FOUND);
    }
}

async function AddNewExam(req, res) {
    const { _id, examType, place, link, result } = res.locals.body;
    try {
        res.status(httpStatus.OK).send(result);
    } catch (error) {
        res.sendStatus(httpStatus.NOT_FOUND);
    }
}

export { UpdateUserByCPF, AddNewVaccine, AddNewAllergy, AddNewExam };