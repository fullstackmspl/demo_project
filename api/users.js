'use strict';
const response = require('../exchange/response');
const service = require('../services/users');

const getAll = async (req, res) => {
  const log = req.context.logger.start('api:users:getAll');
  try {
    const users = await service.getAll(req.context);
    log.end();
    return response.data(res, users);
  } catch (e) {
    log.error(e.message);
    return response.failure(res, e.message);
  }
};

exports.getAll = getAll;
