import express, { Application } from 'express';
import cors from 'cors';
import { AppDataSource } from '../db/data-source';
import { EmployeesRoutes } from '../routes/Employee.routes';
import { ContactInfoRoutes } from '../routes/ContactInfo.routes';

export class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        employees: '/api/employees',
        contactInfo: '/api/contactInfo',
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        this.connectDB();
        this.middlewares();
        this.routes();
    }

    routes = () => {
        this.app.use(this.apiPaths.employees, EmployeesRoutes);
        this.app.use(this.apiPaths.contactInfo, ContactInfoRoutes);
    };

    middlewares = () => {
        this.app.use(cors());
        this.app.use(express.json());
    };

    connectDB = async () => {
        await AppDataSource.initialize();
        console.log('database connected');
    };

    init = () => {
        this.app.listen(this.port, () => {
            console.log('app running on port', this.port);
        });
    };
}
