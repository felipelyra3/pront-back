import express from "express";
import cors from "cors";
import db from "./database/db.js";

export function init() {
    const server = express();
    const PORT = process.env.PORT || 4000;
    const HOST = '0.0.0.0';

    server.use(cors());
    server.use(express.json());

    server.get('/', async (req, res) => {
        try {
            const search = await db.collection('users').find().toArray();
            res.send(search);
        } catch (error) {
            res.send(error);
        }
    });

    server.get('/teste', async (req, res) => {
        res.send("teste");
    });

    server.post('/post', async (req, res) => {
        await db.collection('users').insertOne(req.body);
        const search = await db.collection('users').find().toArray();
        res.send(search);
    });
    

    server.listen(PORT, HOST, () => {
        console.log(`Running on http://${HOST}:${PORT}`);
    });
}