import express from 'express';
import { Login, CheckToken } from '../controllers/login.controllers.js';

const router = express.Router();

router.post('/login', Login)
    .post("/checktoken", CheckToken);

export default router;