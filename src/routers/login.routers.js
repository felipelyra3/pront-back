import express from 'express';
import { LoginSchemaValidation, TokenSchemaValidation } from '../middlewares/loginValidation.middleware.js';
import { Login, CheckToken, DeleteSession } from '../controllers/login.controllers.js';

const router = express.Router();

router.post('/login', LoginSchemaValidation, Login)
    .post("/checktoken", TokenSchemaValidation, CheckToken)
    .delete("/deletesession", DeleteSession);

export default router;