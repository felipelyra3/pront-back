import db from "./db.js";

seed();

async function seed() {
    const findAdmin = await db.collection("users").findOne({ cpf: "00000000000" });
    if (findAdmin) {
        console.log("Admin user already exists");
    } else {
        await db.collection("users").insertOne({
            name: "admin",
            socialName: "admin",
            cpf: "00000000000",
            loginType: "admin",
            password: "$2b$10$s3SBs7Dnn5NuWvqljjt5X.zjTBc1mEz.ev2hskeGQxvdGxGPNA.XC"
        });
        console.log("Admin user created");
    }
    process.exit();
}

