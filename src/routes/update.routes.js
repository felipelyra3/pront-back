import express from 'express';
import { AddNewAllergy, AddNewExam, AddNewVaccine, UpdateUserByCPF } from '../controllers/update.controller.js';
import { LoginTypeAuth, LoginTypeBlock } from '../middlewares/auth.middleware.js';
import { AllergySchemaValidation, ExamSchemaValidation, UpdateUserSchemaValidation, VaccineSchemaValidation } from '../middlewares/updateValidation.middleware.js';

const router = express.Router();

router.put('/user', LoginTypeAuth, LoginTypeBlock, UpdateUserSchemaValidation, UpdateUserByCPF)
    .put('/vaccine', LoginTypeAuth, LoginTypeBlock, VaccineSchemaValidation, AddNewVaccine)
    .put('/allergy', LoginTypeAuth, LoginTypeBlock, AllergySchemaValidation, AddNewAllergy)
    .put('/exam', LoginTypeAuth, LoginTypeBlock, ExamSchemaValidation, AddNewExam);

export default router;