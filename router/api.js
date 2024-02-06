const express = require('express');
const router = express.Router();
const traveller_route = require('./travellers');
const locations_route = require('./locations');
const trips_route = require('./trips');

router.get('/api', (req, res) => {
  res.send('Homepage (\'/api\') get request');
});

router.post('/api', (req, res) => {
  res.send('Homepage (\'/api\') post request')
});

router.use('/api/travellers', traveller_route);

router.use('./api/locations', locations_route);

router.use('/api/trips', trips_route);

router.all('*', (req, res) => {
  res.send('Wildcard');
});

module.exports = router;