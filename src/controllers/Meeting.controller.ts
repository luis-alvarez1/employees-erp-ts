import { Request, Response } from 'express';
import { Meeting } from '../entities/MeetingEntities/Meeting';
import generators from '../generators';

export const GetAllMeetings = async (req: Request, res: Response) => {
    try {
        const allMeetings = await Meeting.find({
            relations: ['atendees'],
        });

        res.json(allMeetings);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const CreateMeeting = async (req: Request, res: Response) => {
    try {
        const newMeeting = generators.MeetingBuilder.createEmployee(req.body);
        await newMeeting.save();
    } catch (error) {
        res.status(500).json(error);
    }
};

export const UpdateMeeting = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedMeeting = await generators.MeetingBuilder.updateEmployee(Number(id), req.body);

        if (!updatedMeeting) {
            res.status(404).json({ ok: false, msg: "Meeting doesn't  exists" });
        }

        await updatedMeeting.save();
    } catch (error) {
        res.status(500).json(error);
    }
};

export const DeleteMeeting = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const meeting = await Meeting.findOneBy({ id: Number(id) });

        if (meeting) {
            await Meeting.delete({ id: meeting.id });
            res.json(meeting);
        } else {
            res.status(404).json({ ok: false, msg: "Meeting desn't exists" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};
