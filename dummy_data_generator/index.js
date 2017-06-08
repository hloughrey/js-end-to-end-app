'use strict';
const jsonfile = require('jsonfile')
const cruises = require('./classes/cruises');

const createDummyData = (cb) => {
  let cruises_array = [];
  for (let i = 1; i < 100; i++) {
    cruises_array.push(cruises.createCruises());
  };
  cb(cruises_array);
};

const writeCruisesData = (cruises_array) => {
  const file = 'cruise_data.json';
  jsonfile.writeFile(file, cruises_array, {flag: 'a'}, function (err) {
    if (err) console.error(err);
  });
};


createDummyData(writeCruisesData);
