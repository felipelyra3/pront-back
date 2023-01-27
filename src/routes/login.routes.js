import express from 'express';
import { LoginSchemaValidation, TokenSchemaValidation } from '../middlewares/loginValidation.middleware.js';
import { Login, CheckToken, DeleteSession } from '../controllers/login.controllers.js';
import { LoginTypeAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/', LoginSchemaValidation, Login)
    .post("/checktoken", TokenSchemaValidation, CheckToken)
    .delete("/deletesession", LoginTypeAuth, DeleteSession);

export default router;