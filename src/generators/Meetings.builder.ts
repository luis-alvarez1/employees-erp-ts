import { Meeting } from '../entities/MeetingEntities/Meeting';

export const createEmployee = (data: Meeting) => {
    const { atendees, url } = data;

    const newMeeting = new Meeting();
    newMeeting.url = url;
    newMeeting.atendees = atendees && atendees;

    return newMeeting;
};

export const updateEmployee = async (id: number, data: Meeting) => {
    const meeting = await Meeting.findOneBy({ id });
    const { atendees, url } = data;

    if (meeting) {
        if (url) {
            meeting.url = url;
        }
        if (atendees) {
            meeting.atendees = atendees;
        }
    }

    return meeting;
};
