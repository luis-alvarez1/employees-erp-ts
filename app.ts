import 'reflect-metadata';
import 'dotenv/config';
import { Server } from './src/models/Server';
const server = new Server();

server.init();
