import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Entites } from '../entities';

export const AppDataSource = new DataSource({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'typeorm-test',
    logging: true,
    entities: Entites,
    synchronize: true,
});
