import cors from 'cors';
import express from 'express';
import { createConnection, getConnection, getConnectionOptions } from 'typeorm';

import routes from './routes';

class AppController {
  private express: express.Application;

  public async startApp(): Promise<express.Application> {
    this.express = express();

    this.setupMiddlewares();
    await this.startDatabase();
    this.setupRoutes();

    return this.express;
  }

  public async stopApp(): Promise<void> {
    await getConnection().close();
  }

  private setupMiddlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private async startDatabase(): Promise<void> {
    await createConnection();
  }

  private setupRoutes(): void {
    this.express.use(routes);
  }

  public async resetDatabase(): Promise<void> {
    await getConnection().close();
    const options = await getConnectionOptions();
    const newOptions = { ...options, dropSchema: true, name: 'default' };
    await createConnection(newOptions);
  }
}

export default AppController;
