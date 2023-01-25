import express from 'express';
import { LoginTypeAuth } from '../middlewares/auth.middleware.js';
import { RegisterUser } from '../controllers/register.controller.js';
//import { Login, CheckToken, DeleteSession } from '../controllers/login.controllers.js';

const router = express.Router();

router.post('/registeruser', LoginTypeAuth, RegisterUser)
    /* .post("/checktoken", CheckToken)
    .delete("/deletesession", DeleteSession) */;

export default router;