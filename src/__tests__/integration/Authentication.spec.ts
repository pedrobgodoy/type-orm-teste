import { createConnection, getConnection } from 'typeorm';

import { User } from '@models/User';

beforeEach(async () => {
  return createConnection();
});

afterEach(() => {
  const conn = getConnection();
  return conn.close();
});

describe('User', () => {
  it('should create a user', async () => {
    const connection = await getConnection();

    const user = new User();

    user.firstName = 'Pedro';
    user.lastName = 'Godoy';
    user.age = 18;

    const response = await connection.manager.save(user);

    expect(response.firstName).toBe('Pedro');
  });
});
