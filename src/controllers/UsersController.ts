import { Request, Response } from 'express';
import { User } from 'src/model/User';
import { getConnection } from 'typeorm';

class UsersController {
  public async index(req: Request, res: Response): Promise<void> {
    const { firstName, lastName, age } = req.body;

    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;

    const connection = await getConnection();

    connection.manager
      .save(user)
      .then((userResponse) => {
        res.send({ userResponse });
      })
      .catch((error) => {
        console.log(error);
        res.send({ status: 'error', message: 'Error creating user' });
      });
  }
}

export default new UsersController();
