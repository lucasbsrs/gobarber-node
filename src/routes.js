import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Lucas Silva',
    email: 'lucasbsrs@gmail.com',
    password_hash: '1345646456',
  });

  return res.json(user);
});

export default routes;
