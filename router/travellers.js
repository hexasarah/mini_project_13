const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('(\'/travellers\') get request')
});

router.post('/', (req, res) => {
  res.send('(\'/travellers\') post request')
});

router.get('/:id', (req, res) => {
  res.send('(\'/api/travellers/:id\') get request')
});

router.post('/:id', (req, res) => {
  res.send('(\'/api/travellers/:id\') post request')
});

module.exports = router;