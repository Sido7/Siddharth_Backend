import express from 'express';
import { catchErrorWrapper } from '../middleware/catchError.wrapper.middleware';
import { validateSchema } from '../middleware/schemaValidator.middleware';
import { userAddresSchema, userAddressOptionalSchema } from '../schema/user.address.schema';
import { createUserAddressController, updateUserAddressController, delteUserAddressController, findUserAddressController } from '../controller/user.address.controller'
import { authenticate } from '../middleware/authenticate.middleware';

const router = express.Router();

router.post('/address', validateSchema(userAddresSchema),authenticate, catchErrorWrapper(createUserAddressController));
router.put('/address/:id', validateSchema(userAddressOptionalSchema), authenticate, catchErrorWrapper(updateUserAddressController));
router.get("/address",authenticate,catchErrorWrapper(findUserAddressController))
router.delete("/address/:id",authenticate,catchErrorWrapper(delteUserAddressController))


export default router