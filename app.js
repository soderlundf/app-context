const express = require('express');
const { randomUUID } = require('crypto');
const { asyncLocalStorage } = require('./context');
const testRoute = require('./routes/testRoute');

const app = express();

app.use((req, res, next) => {
  const store = { requestId: randomUUID() };
  asyncLocalStorage.run(store, () => {
    next();
  });
});

app.use('/test', testRoute);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
