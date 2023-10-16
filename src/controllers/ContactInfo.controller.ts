import { Request, Response } from 'express';
import { ContactInfo } from '../entities/ContactInfoEntities/ContaInfo';
import generators from '../generators';

export const GetAllContactInfo = async (req: Request, res: Response) => {
    const allContactInfo = await ContactInfo.find({
        relations: ['employee'],
    });
    res.json(allContactInfo);
};

export const CreateContactInfo = async (req: Request, res: Response) => {
    try {
        const contactInfo = generators.ContactInfoBuilder.createContactInfo(req.body);

        await contactInfo.save();

        res.json(contactInfo);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const UpdateContactInfo = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const contactInfo = await generators.ContactInfoBuilder.updateContactInfo(
            Number(id),
            req.body,
        );

        if (!contactInfo) {
            res.status(404).json({ ok: false, msg: "Contact Information doesn't  exists" });
        }

        await contactInfo.save();
        res.json(contactInfo);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const DeleteContactInfo = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const contactInfo = await ContactInfo.findOneBy({ id: Number(id) });

        if (contactInfo) {
            await ContactInfo.delete({ id: contactInfo.id });
            res.json(contactInfo);
        } else {
            res.status(404).json({ ok: false, msg: "Contact Information desn't exists" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};
