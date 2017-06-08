const routes = require('express').Router();

const cruises = require('./cruises/index');

routes.get('/', function(req, res, next) {
  res.status(200).json({message: 'Sweet...your talking to our API'});
});

// Cruises
routes.use('/cruises', cruises);

module.exports = routes;
