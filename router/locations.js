const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('(\'/api/locations\') get request')
});

router.post('/', (req, res) => {
  res.send('(\'/api/locations\') post request')
});

router.get('/:id', (req, res) => {
  res.send('(\'/api/locations/:id\') get request')
});

router.delete('/:id', (req, res) => {
  res.send('(\'/api/locations/:id\') delete request')
});

module.exports = router;