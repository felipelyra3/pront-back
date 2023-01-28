import express from "express";
import cors from "cors";
import db from "./database/db.js";
import bcrypt from "bcrypt";
import login from "./routes/login.routes.js";
import register from "./routes/register.routes.js";
import search from "./routes/search.routes.js";
import update from "./routes/update.routes.js";

export function init() {
    const server = express();
    const PORT = process.env.PORT || 4000;
    const HOST = '0.0.0.0';

    server.use(cors());
    server.use(express.json());

    server.use("/login", login);
    server.use("/registration", register);
    server.use("/search", search);
    server.use("/update", update);

    server.listen(PORT, HOST, () => {
        console.log(`Running on http://${HOST}:${PORT}`);
    });
}