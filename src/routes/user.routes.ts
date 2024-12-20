import express from 'express';
import { createUser, findUser, login  } from '../controller/user.controller';
import { catchErrorWrapper } from '../middleware/catchError.wrapper.middleware';
import { validateSchema } from '../middleware/schemaValidator.middleware';
import { createUserSchema } from '../schema/user.schema';
import { loginSchema } from '../schema/user.loging.schema';
import { authenticate } from '../middleware/authenticate.middleware';

const router = express.Router();

router.post('/signup', validateSchema(createUserSchema), catchErrorWrapper(createUser));
router.post('/login', validateSchema(loginSchema), catchErrorWrapper(login));
router.get("/me",authenticate,catchErrorWrapper(findUser))


export default router