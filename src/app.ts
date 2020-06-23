import cors from 'cors';
import express from 'express';
import { createConnection } from 'typeorm';

import routes from './routes.js';

class App {
  express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    const { DB_HOST, DB_PORT, DB_TIMEOUT } = process.env;

    const I_DB_PORT: number = parseInt(DB_PORT, 10);
    const I_DB_TIMEOUT: number = parseInt(DB_TIMEOUT, 10);

    createConnection({
      type: 'mariadb',
      host: DB_HOST,
      port: I_DB_PORT,
      connectTimeout: I_DB_TIMEOUT,
      acquireTimeout: I_DB_TIMEOUT,
    }).catch(() => console.log('Erro DB'));
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
