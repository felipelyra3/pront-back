import db from "../database/db.js";
import mongo from "mongodb";

async function updateOneNewUser(_id, name, socialName, gender, birthday, cpf, address, loginType, email, susNumber, phoneNumbers, healthCare, crm, coren) {
    const o_id = new mongo.ObjectID(_id);
    await db.collection('users').updateOne({ _id: o_id }, { $set: { name, socialName, gender, birthday, cpf, address, loginType, email, susNumber, phoneNumbers, healthCare, crm, coren } });
}

async function updateOneUserPassword(cpf, password) {
    await db.collection('users').updateOne({ cpf: cpf }, { $set: { password: password } });
}

async function updaneOneNewVaccine(_id, newVaccine) {
    const o_id = new mongo.ObjectID(_id);
    await db.collection('users').updateOne({ _id: o_id }, { $set: { vaccines: newVaccine } });
}

async function updaneOneNewAllergy(_id, newAllergy) {
    const o_id = new mongo.ObjectID(_id);
    await db.collection('users').updateOne({ _id: o_id }, { $set: { allergies: newAllergy } });
}

async function updaneOneNewExam(_id, newExam) {
    const o_id = new mongo.ObjectID(_id);
    await db.collection('users').updateOne({ _id: o_id }, { $set: { exams: newExam } });
}

const updateRepository = {
    updateOneNewUser,
    updateOneUserPassword,
    updaneOneNewVaccine,
    updaneOneNewAllergy,
    updaneOneNewExam,
}

export default updateRepository;