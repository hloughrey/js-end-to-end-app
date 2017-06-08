const cruises = require('express').Router();
const cruise_data = require('../../lib/cruise_data.json');
const responses = require('../../lib/responses');


cruises.get('/', (req, res, next) => {
  res.status(200)
  .json({
    responses: responses.RESPONSES_STATUS.SUCCESS,
    message: responses.RESPONSES_MESSAGES.RESOURCE_FOUND,
    data: cruise_data
  });
});

module.exports = cruises;
