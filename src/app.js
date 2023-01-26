import express from "express";
import cors from "cors";
import db from "./database/db.js";
import bcrypt from "bcrypt";
import login from "./routers/login.routers.js";
import register from "./routers/register.routers.js";

export function init() {
    const server = express();
    const PORT = process.env.PORT || 4000;
    const HOST = '0.0.0.0';

    server.use(cors());
    server.use(express.json());

    server.use(login);
    server.use("/registration", register);

    server.listen(PORT, HOST, () => {
        console.log(`Running on http://${HOST}:${PORT}`);
    });
}