import dotenv from 'dotenv';

import App from './app/app';

const envFile = process.env.NODE_ENV
  ? `${__dirname}/.env.${process.env.NODE_ENV}`
  : '.env';
dotenv.config({ path: envFile });

const app = new App();

app.startApp().then((server) => {
  server.listen(process.env.PORT || 3333, () =>
    console.log(`Server listening on port ${process.env.PORT || 3333}`)
  );
});
