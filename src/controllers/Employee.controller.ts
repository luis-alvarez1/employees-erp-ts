import { Request, Response } from 'express';
import { Employee } from '../entities/EmployeeEntities/Employee';
import generators from '../generators';

export const GetAllEmployees = async (req: Request, res: Response) => {
    const employees = await Employee.find({
        relations: ['contactInfo', 'manager'], // TODO: Add tasks and meetings
    });

    res.json(employees);
};

export const CreateEmployee = async (req: Request, res: Response) => {
    try {
        const newEmployee = generators.EmployeeBuilder.createEmployee(req.body);
        await newEmployee.save();

        res.json(newEmployee);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const UpdateEmployee = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const employee = await generators.EmployeeBuilder.updateEmployee(Number(id), req.body);
        if (!employee) {
            res.status(404).json({ ok: false, error: 'Employee doesnt exists' });
        }

        await employee.save();
        res.json(employee);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const DeleteEmployee = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const userExists = await Employee.findOneBy({ id: Number(id) });

        if (userExists) {
            await Employee.delete({ id: userExists.id });
        } else {
            res.status(404).json({ ok: false, error: 'Employee doesnt exists' });
        }

        res.json(userExists);
    } catch (error) {
        res.status(500).json(error);
    }
};

// TODO: Asignar meetings, contact y tasks a employees