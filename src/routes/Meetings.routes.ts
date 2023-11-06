import { Router } from 'express';
import {
    CreateMeeting,
    DeleteMeeting,
    GetAllMeetings,
    UpdateMeeting,
} from '../controllers/Meeting.controller';
import validateFields from '../helpers/validateFields';
import { body } from 'express-validator';

const router = Router();

router.get('/', GetAllMeetings);
router.post(
    '/',
    [
        body('url', 'URL is required').notEmpty().isURL(),
        body('atendees', 'Atendees are required').notEmpty().isArray(),

        validateFields,
    ],
    CreateMeeting,
);
router.put('/:id', UpdateMeeting);
router.delete('/:id', DeleteMeeting);

export const MeetingsRoutes = router;
