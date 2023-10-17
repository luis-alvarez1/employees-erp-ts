import { Router } from 'express';
import { CreateTask, GetAllTasks } from '../controllers/Task.controller';
import validateFields from '../helpers/validateFields';
import { body } from 'express-validator';

const router = Router();

router.get('/', GetAllTasks);
router.post(
    '/',
    [
        body('employee', 'Employee ID is required').notEmpty().isInt(),
        body('name', 'Name is required').notEmpty().isString(),
        validateFields,
    ],
    CreateTask,
);

export const TaskRoutes = router;
