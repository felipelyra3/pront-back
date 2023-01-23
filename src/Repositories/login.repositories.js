import db from "../database/db.js";

async function findOneByCPF(cpf) {
    const user = await db.collection('users').findOne({ cpf: cpf });
    return user;
}

async function findOneByToken(token) {
    const session = await db.collection('sessions').findOne({ token: token });
    return session;
}

async function insertOneNewSession(editedUser) {
    db.collection('sessions').findOneAndDelete({ cpf: editedUser.cpf });
    db.collection('sessions').insertOne({ userId: editedUser.userId, name: editedUser.name, socialName: editedUser.socialName, cpf: editedUser.cpf, loginType: editedUser.loginType, birthDate: editedUser.birthDate, token: editedUser.token });
}

const loginRepository = {
    findOneByCPF,
    findOneByToken,
    insertOneNewSession,
}

export default loginRepository;