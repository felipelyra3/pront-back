import express from 'express';
import { LoginTypeAuth } from '../middlewares/auth.middleware.js';
import { RegisterUser } from '../controllers/register.controller.js';
import { RegisterNewUserSchemaValidation } from '../middlewares/register.validation.js';

const router = express.Router();

router.post('/newuser', LoginTypeAuth, RegisterNewUserSchemaValidation, RegisterUser)
    /* .post("/checktoken", CheckToken)
    .delete("/deletesession", DeleteSession) */;

export default router;