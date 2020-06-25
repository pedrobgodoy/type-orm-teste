import dotenv from 'dotenv';

import app from './app';

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
dotenv.config({ path: envFile });

app.listen(process.env.PORT || 3333, () =>
  console.log(`Server listening on port ${process.env.PORT || 3333}`)
);
