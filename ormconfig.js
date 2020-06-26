import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import dotenv from 'dotenv';

const envFile = process.env.NODE_ENV
  ? `${__dirname}/.env.${process.env.NODE_ENV}`
  : '.env';
dotenv.config({ path: envFile });

module.exports = {
  type:  process.env.DB_CONNECTION,
  host:  process.env.DB_HOST,
  port:  process.env.DB_PORT,
  database:  process.env.DB_NAME,
  username:  process.env.DB_USER,
  password:  process.env.DB_PASS,
  synchronize:  process.env.DB_SYNC,
  logging: false,
  entities: ['src/app/model/**/*.ts'],
  namingStrategy: new SnakeNamingStrategy(),
  dropSchema: process.env.DB_DROP == "true"
};
