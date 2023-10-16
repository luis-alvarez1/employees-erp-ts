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
    '/:id',
    [
        param('id', 'id required').notEmpty(),
        body('name', 'Name is required').notEmpty().isString(),
        body('manager', 'Manager not valid').optional().isInt(),
        body('contactInfo', 'Contact Info not valid').optional().isInt(),
        // TODO: Add validations on controller for this fields
        // body('meetings', 'Meetings not valid').optional().isArray(),
        // body('tasks', 'Tasks not valid').optional().isArray(),
        validateFields,
    ],
    UpdateEmployee,
);
router.delete('/:id', [param('id', 'id required').notEmpty(), validateFields], DeleteEmployee);

export const EmployeesRoutes = router;
