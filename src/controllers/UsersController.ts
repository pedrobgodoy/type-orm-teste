import { Request, Response } from 'express';

import { User } from '@models/User';

class UsersController {
  public async index(req: Request, res: Response): Promise<void> {
    const { firstName, lastName, age } = req.body;

    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    const response = await user.save();

    if (response) {
      res.send({ status: 'sucesso', user });
    }
  }
}

export default new UsersController();
