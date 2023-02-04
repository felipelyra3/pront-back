import db from "../database/db.js";

async function insertOneNewUser(name, socialName, gender, birthday, cpf, address, loginType, email, susNumber, phoneNumbers, healthCare, crm, coren, hashPassword, firstLogin) {
    const user = await db.collection('users').insertOne({ name, socialName, gender, birthday, cpf, address, loginType, email, susNumber, phoneNumbers, healthCare, crm, coren, password: hashPassword, firstLogin });
    return user;
}

const registerRepository = {
    insertOneNewUser,
}

export default registerRepository;