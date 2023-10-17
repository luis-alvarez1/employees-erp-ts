import { Request, Response } from 'express';
import { Task } from '../entities/TasksEntites/Tasks';
import generators from '../generators';

export const GetAllTasks = async (req: Request, res: Response) => {
    const tasks = await Task.find({
        relations: ['employee'],
    });

    res.json(tasks);
};

export const CreateTask = async (req: Request, res: Response) => {
    try {
        const task = generators.TaskBuilder.createTask(req.body);

        await task.save();

        res.json(task);
    } catch (error) {
        res.status(500).json(error);
    }
};
