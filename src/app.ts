import cors from 'cors';
import express from 'express';

import database from './database';
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
    database.createConnection();
    database.connect();
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
