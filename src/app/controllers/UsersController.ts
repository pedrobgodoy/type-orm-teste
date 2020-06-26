import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { User } from '@models/User';

import { handleValidationError } from '../utils/handleValidationError';

class UsersController {
  public async index(req: Request, res: Response): Promise<void> {
    const repository = getRepository(User);

    const results = await repository.find();
    res.send(results);
  }

  public async show(req: Request, res: Response): Promise<void> {
    const repository = getRepository(User);

    const result = await repository.findOne(req.params.id);
    if (!result) {
      res.status(400).send({
        status: 'success',
        message: `No User with id: ${req.params.id} found!`,
      });
      return;
    }
    res.send(result);
  }

  public async store(req: Request, res: Response): Promise<void> {
    const { name, age, email } = req.body;

    const repository = getRepository(User);
    const uniqueUser = await repository.findOne({ where: { email } });

    if (uniqueUser) {
      res
        .status(400)
        .send({ erros: [{ path: 'email', error: 'notUniqueEmail' }] });
    }

    const user = new User();
    user.fullName = name;
    user.age = age;
    user.email = email;

    const errors = await validate(user, { validationError: { target: false } });
    if (errors.length > 0) {
      res.status(400).send({ errors: handleValidationError(errors) });
      return;
    }

    try {
      const response = await repository.save(user);

      res.send(response);
    } catch (error) {
      res.status(400).send({ error: 'unknownError' });
    }
  }
}

export default new UsersController();
