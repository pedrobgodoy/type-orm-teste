import request from 'supertest';

import AppController from '../../app/app';

const appController = new AppController();
let app;

beforeAll(async () => {
  app = await appController.startApp();
});

afterAll(async () => {
  app = await appController.stopApp();
});

beforeEach(async () => {
  await appController.resetDatabase();
});

describe('User Store POST -> /user', () => {
  it('should create a user', async () => {
    const user = {
      name: 'Pedro Godoy',
      email: 'pedro@godoy.com',
      age: 18,
    };

    const response = await request(app).post('/user').send(user);

    expect(response.status).toBe(200);
  });

  it('should return invalid email', async () => {
    const user = {
      name: 'Pedro Godoy',
      email: 'pedrogodoy.com',
      age: 18,
    };

    const response = await request(app).post('/user').send(user);

    expect(response.status).toBe(400);
  });

  it('should return invalid name', async () => {
    const user = {
      name: 'Pe',
      email: 'pedro@godoy.com',
      age: 18,
    };

    const response = await request(app).post('/user').send(user);

    expect(response.status).toBe(400);
  });

  it('should return invalid age', async () => {
    const user = {
      name: 'Pedro Godoy',
      email: 'pedro@godoy.com',
      age: -1,
    };

    const response = await request(app).post('/user').send(user);

    console.log(response.body);
    expect(response.status).toBe(400);
  });
});
