import "reflect-metadata";
import { DataSource } from 'typeorm';
require('dotenv').config();

export const config = new DataSource({
  type: 'postgres',
  host: String(process.env.DATABASE_HOST),
  port: Number(process.env.DATABASE_PORT),
  username: String(process.env.DATABASE_USERNAME),
  password: String(process.env.DATABASE_PASSWORD),
  database: String(process.env.DATABASE_NAME),
  entities: ['src/models/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: ['src/subscribers/**/*.ts'],
  synchronize: true, // Set to false for production
});
