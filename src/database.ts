import { ConnectionManager, Connection } from 'typeorm';

class Database {
  private connectionManager: ConnectionManager;

  connection: Connection;

  constructor() {
    this.connectionManager = new ConnectionManager();
  }

  public createConnection(): void {
    const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

    this.connection = this.connectionManager.create({
      type: 'mysql',
      host: DB_HOST,
      port: parseInt(DB_PORT, 10),
      database: DB_NAME,
      username: DB_USER,
      password: DB_PASS,
      synchronize: true,
      logging: false,
      entities: ['src/entity/**/*.ts'],
      migrations: ['src/migration/**/*.ts'],
      subscribers: ['src/subscriber/**/*.ts'],
    });
  }

  public async connect(): Promise<void> {
    await this.connection
      .connect()
      .then(() => console.log('Database connected!'))
      .catch((error) => console.log(error));
  }

  public async close(): Promise<void> {
    await this.connection
      .close()
      .catch(() => console.log('Error closing connection to DB'));
  }
}

export default new Database();
