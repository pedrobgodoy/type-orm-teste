const dotenv = require('dotenv');

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
dotenv.config({ path: envFile });

const { DB_CONNECTION, DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, DB_SYNC, DB_DROP } = process.env;

const dbOptions = {
  type: DB_CONNECTION,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASS,
  synchronize: DB_SYNC,
  logging: false,
  entities: ['src/model/**/*.ts'],
};

if(DB_DROP == "true")
  dbOptions.dropSchema = true;


module.exports = dbOptions;