import { Router } from 'express';
import {
    CreateEmployee,
    DeleteEmployee,
    GetAllEmployees,
    UpdateEmployee,
} from '../controllers/Employee.controller';
import { body, param } from 'express-validator';
import validateFields from '../helpers/validateFields';

const router = Router();

router.get('/', GetAllEmployees);
router.post(
    '/',
    [
        body('name', 'Name is required').notEmpty().isString(),
        body('manager', 'Manager not valid').optional().isInt(),
        body('contactInfo', 'Contact Info not valid').optional().isInt(),
        body('meetings', 'Unexpected property `meetings`').isEmpty(),
        body('tasks', 'Unexpected property `tasks`').isEmpty(),
        validateFields,
    ],
    CreateEmployee,
);
router.put(
    // TODO: CONTINUE FROM HEREEE
    '/:id',
    [
        param('id', 'id required').notEmpty(),
        body('name', 'Name is required').notEmpty().isString(),
        body('manager', 'Manager not valid').optional().isInt(),
        body('contactInfo', 'Contact Info not valid').optional().isInt(),
        body('meetings', 'Meetings not valid').optional().isArray(),
        body('tasks', 'Tasks not valid').optional().isArray(),
        validateFields,
    ],
    UpdateEmployee,
);
router.delete('/:id', DeleteEmployee);

export const EmployeesRoutes = router;
