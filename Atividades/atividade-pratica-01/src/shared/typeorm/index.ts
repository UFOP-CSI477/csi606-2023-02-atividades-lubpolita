/* eslint-disable import/no-extraneous-dependencies */
import 'dotenv/config';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: '12345',
  database: 'postgres',
  synchronize: false,
  logging: false,
  migrationsTableName: 'migration',
  entities: ['src/shared/typeorm/entities/*.ts'],
  migrations: ['src/shared/typeorm/migrations/*.ts'],
});
