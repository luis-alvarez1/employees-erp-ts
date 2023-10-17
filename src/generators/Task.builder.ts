import { Task } from '../entities/TasksEntites/Tasks';

export const createTask = (data: Task): Task => {
    const { employee, name } = data;

    const newTask = new Task();

    newTask.employee = employee;
    newTask.name = name;

    return newTask;
};

export const updateTask = async (id: number, data: Task): Promise<Task> => {
    const { employee, name } = data;

    const task = await Task.findOneBy({ id });

    if (task) {
        task.employee = employee && employee;
        task.name = name && name;
        await task.save();
    }

    return task;
};
