const express = require('express');
const router = express.Router();
const { logWithRequestId } = require('../log');

router.get('/', async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 50)); // async operation
  logWithRequestId('Inside route handler');
  res.send('Hello from test route');
});

module.exports = router;
