import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
    await mongoClient.connect();
    console.log("Mongodb connected");
} catch (error) {
    console.log(error.message);
}
const db = mongoClient.db('pront');

export default db;