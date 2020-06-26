import { Router } from 'express';

import UserController from '@controllers/UsersController';

const routes = Router();

routes.get('/user', UserController.index);
routes.get('/user/:id', UserController.show);
routes.post('/user', UserController.store);

export default routes;
