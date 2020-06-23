import app from './app';

const { PORT } = process.env;

app.listen(PORT || 3333, () =>
  console.log(`Server listening on port ${PORT || 3333}`)
);
