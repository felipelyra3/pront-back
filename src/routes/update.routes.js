import express from 'express';
import { AddNewAllergy, AddNewExam, AddNewVaccine, UpdateUserByCPF, UpdateUserPassword } from '../controllers/update.controller.js';
import { LoginTypeAuth, LoginTypeBlock } from '../middlewares/auth.middleware.js';
import { LoginSchemaValidation } from '../middlewares/loginValidation.middleware.js';
import { AllergySchemaValidation, ExamSchemaValidation, UpdateUserSchemaValidation, VaccineSchemaValidation } from '../middlewares/updateValidation.middleware.js';

const router = express.Router();

router.put('/user', LoginTypeAuth, LoginTypeBlock, UpdateUserSchemaValidation, UpdateUserByCPF)
    .put('/user/password', LoginTypeAuth, LoginTypeBlock, LoginSchemaValidation, UpdateUserPassword)
    .put('/vaccine', LoginTypeAuth, LoginTypeBlock, VaccineSchemaValidation, AddNewVaccine)
    .put('/allergy', LoginTypeAuth, LoginTypeBlock, AllergySchemaValidation, AddNewAllergy)
    .put('/exam', LoginTypeAuth, LoginTypeBlock, ExamSchemaValidation, AddNewExam);

export default router;