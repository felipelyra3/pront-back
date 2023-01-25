import db from "../database/db.js";

async function findOneByCPF(cpf) {
    const user = await db.collection('users').findOne({ cpf: cpf });
    return user;
}

async function findOneByToken(token, loginType) {
    const session = await db.collection('sessions').findOne({ token: token, loginType });
    return session;
}

async function insertOneNewSession(editedUser) {
    const d = new Date,
        date = [d.getFullYear(), d.getMonth() + 1,
        d.getDate()].join('/') + ' ' +
            [d.getHours(),
            d.getMinutes(),
            d.getSeconds()].join(':');
    db.collection('sessions').findOneAndDelete({ cpf: editedUser.cpf });
    db.collection('sessions').insertOne({ userId: editedUser.userId, name: editedUser.name, socialName: editedUser.socialName, cpf: editedUser.cpf, loginType: editedUser.loginType, birthday: editedUser.birthday, token: editedUser.token, createdAt: date });
}

async function findOneAndDeleteSessionByToken(token) {
    db.collection('sessions').findOneAndDelete({ token: token });
}

async function findOneCheckSessionLoginType(token, loginType) {
    const session = db.collection('sessions').findOne({ token, loginType });
    return session;
}

const loginRepository = {
    findOneByCPF,
    findOneByToken,
    insertOneNewSession,
    findOneAndDeleteSessionByToken,
    findOneCheckSessionLoginType,
}

export default loginRepository;