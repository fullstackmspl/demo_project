'use strict';
const response = require('../exchange/response');
const { types } = require('util');
const create = (req, res, next) => {
  const log = req.context.logger.start('validators:answers:update');
  if (!req.body.firstName || req.body.firstName == '') {
    log.end();
    return response.failure(res, 'First name is required');
  }
  if (!req.body.lastName || req.body.lastName == '') {
    log.end();
    return response.failure(res, 'Last name is required');
  }
  if (!req.body.email || req.body.email == '') {
    log.end();
    return response.failure(res, 'Email is required');
  }
  if (!req.body.zipCode || req.body.zipCode == '') {
    log.end();
    return response.failure(res, 'Zip code is required');
  }
  if (!req.body.state || req.body.state == '') {
    log.end();
    return response.failure(res, 'State is required');
  }
  if (!req.body.country || req.body.country == '') {
    log.end();
    return response.failure(res, 'Country is required');
  }
  if (!req.body.dob || req.body.dob == '') {
    log.end();
    return response.failure(res, 'Date of birth is required');
  }
  const date = new Date(req.body.dob);
  if (date == 'Invalid Date') {
    log.end();
    return response.failure(res, 'Please Enter valid date');
  }
  if (req.body.zipCode.length < 5) {
    log.end();
    return response.failure(res, 'Zip code must be at least 5 characters');
  }
  log.end();
  return next();
};
exports.create = create;
