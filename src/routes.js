import { Router } from 'express';

import UserController from '@controllers/UsersController';

const routes = Router();

routes.get('/user', UserController.index);

export default routes;
