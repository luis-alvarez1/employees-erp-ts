import { Employee } from '../entities/EmployeeEntities/Employee';

export const createEmployee = (data: Employee) => {
    const { name, manager, contactInfo } = data;

    const newEmployee = new Employee();
    newEmployee.name = name;
    newEmployee.manager = manager && manager;
    newEmployee.contactInfo = contactInfo && contactInfo;

    return newEmployee;
};

export const updateEmployee = async (id: number, data: Employee) => {
    const employee = await Employee.findOneBy({ id });
    const { name, manager, contactInfo } = data;

    if (employee) {
        if (name) {
            employee.name = name;
        }
        if (manager) {
            employee.manager = manager;
        }
        if (contactInfo) {
            employee.contactInfo = contactInfo;
        }
    }

    return employee;
};
