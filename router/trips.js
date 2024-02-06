const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('(\'/api/trips\') post request')
});

router.delete('/:id', (req, res) => {
  res.send('(\'/api/trips/:id\') delete request')
});

module.exports = router;