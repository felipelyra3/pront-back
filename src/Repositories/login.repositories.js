import db from "../database/db.js";

async function findOneByCPF(cpf) {
    const user = await db.collection('users').findOne({ cpf: cpf });
    return user;
}

async function insertOneNewSession(editedUser) {
    db.collection('sessions').insertOne({ editedUser });
}

const loginRepository = {
    findOneByCPF,
    insertOneNewSession
}

export default loginRepository;