import { DataSource } from 'typeorm';
import { Entites } from '../entities';

export const AppDataSource = new DataSource({
    type: 'mariadb',
    host: process.env.DB_URL,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'employees-erp',
    logging: true,
    entities: Entites,
    synchronize: true,
});
