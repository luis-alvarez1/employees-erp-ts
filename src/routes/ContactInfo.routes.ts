import { Router } from 'express';
import {
    CreateContactInfo,
    DeleteContactInfo,
    GetAllContactInfo,
    UpdateContactInfo,
} from '../controllers/ContactInfo.controller';
import validateFields from '../helpers/validateFields';
import { body, param } from 'express-validator';

const router = Router();

router.get('/', GetAllContactInfo);
router.post(
    '/',
    [
        body('id', "Can't assing id").isEmpty(),
        body('phone', 'Invalid phone number').isMobilePhone(['es-CO', 'en-US', 'es-ES']),
        body('email', 'Invalid Email').notEmpty().isEmail(),
        body('employee', 'Invalid Employee').notEmpty().isInt(),
        validateFields,
    ],
    CreateContactInfo,
);
router.put(
    '/:id',
    [
        param('id', 'id is required').notEmpty(),
        body('id', "id can't be modified").isEmpty(),
        body('phone', 'Invalid phone number').optional().isMobilePhone(['es-CO', 'en-US', 'es-ES']),
        body('email', 'Invalid Email').optional().notEmpty().isEmail(),
        body('employee', 'Invalid Employee').optional().notEmpty().isInt(),
        validateFields,
    ],
    UpdateContactInfo,
);

router.delete(
    '/:id',
    [param('id', 'id is required').notEmpty(), validateFields],
    DeleteContactInfo,
);

export const ContactInfoRoutes = router;
