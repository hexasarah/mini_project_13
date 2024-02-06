const express = require('express');
const PORT = 3001;
const app = express();
const router = require('./router/api');

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});