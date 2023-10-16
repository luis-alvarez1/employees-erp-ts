import { ContactInfo } from '../entities/ContactInfoEntities/ContaInfo';

export const createContactInfo = (data: ContactInfo) => {
    const { email, employee, phone } = data;

    const newContacInfo = new ContactInfo();

    newContacInfo.email = email;
    newContacInfo.employee = employee;
    newContacInfo.phone = phone;

    return newContacInfo;
};
export const updateContactInfo = async (id: number, data: ContactInfo) => {
    const contactInfo = await ContactInfo.findOneBy({ id });

    if (contactInfo) {
        contactInfo.email = data.email && data.email;
        contactInfo.phone = data.phone && data.phone;
        contactInfo.employee = data.employee && data.employee;
    }

    return contactInfo;
};
