import express from 'express';
import { LoginTypeAuth, LoginTypeBlock } from '../middlewares/auth.middleware.js';
import { RegisterUser } from '../controllers/register.controller.js';
import { RegisterNewUserSchemaValidation } from '../middlewares/register.validation.js';

const router = express.Router();

router.post('/newuser', LoginTypeAuth, LoginTypeBlock, RegisterNewUserSchemaValidation, RegisterUser);

export default router;