import express from 'express';
import { FindUserByCPF, FindUserBySusNumber } from '../controllers/search.controllers.js';
import { LoginTypeAuth, LoginTypeBlock } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/cpf/:cpf', LoginTypeAuth, LoginTypeBlock, FindUserByCPF)
    .get('/susnumber/:susnumber', LoginTypeAuth, LoginTypeBlock, FindUserBySusNumber)
    .get('/patient/cpf/:cpf', LoginTypeAuth, FindUserByCPF);

export default router;