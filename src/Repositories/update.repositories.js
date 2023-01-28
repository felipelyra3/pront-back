import db from "../database/db.js";
import mongo from "mongodb";

async function updateOneNewUser(_id, name, socialName, gender, birthday, cpf, address, loginType, email, susNumber, phoneNumbers, healthCare, crm, coren) {
    const o_id = new mongo.ObjectID(_id);
    await db.collection('users').updateOne({ _id: o_id }, { $set: { name, socialName, gender, birthday, cpf, address, loginType, email, susNumber, phoneNumbers, healthCare, crm, coren } });
}

async function updaneOneNewVaccine(_id, newVaccine) {
    const o_id = new mongo.ObjectID(_id);
    await db.collection('users').updateOne({ _id: o_id }, { $set: { vaccines: newVaccine } });
}

async function updaneOneNewAllergy(_id, newAllergy) {
    const o_id = new mongo.ObjectID(_id);
    await db.collection('users').updateOne({ _id: o_id }, { $set: { allergies: newAllergy } });
}

const updateRepository = {
    updateOneNewUser,
    updaneOneNewVaccine,
    updaneOneNewAllergy,
}

export default updateRepository;