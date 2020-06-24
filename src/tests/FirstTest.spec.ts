import { User } from 'src/entity/User';

test('it should be ok', () => {
  const user = new User();

  user.firstName = 'Pedro';

  expect(user.firstName).toEqual('Pedro');
});
