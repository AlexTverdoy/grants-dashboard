import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Grant } from './entities/Grant';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'grants',
  synchronize: true,
  entities: [Grant],
});