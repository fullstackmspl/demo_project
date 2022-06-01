'use strict';
const response = require('../exchange/response');
const service = require('../services/answers');

const create = async (req, res) => {
  const log = req.context.logger.start('api:answers:create');
  try {
    const answers = await service.create(req.body, req.context);
    const messages = 'Answer created successfully';
    log.end();
    return response.success(res, messages, answers);
  } catch (e) {
    log.error(e.message);
    return response.failure(res, e.message);
  }
};
const getAll = async (req, res) => {
  const log = req.context.logger.start('api:answers:getAll');
  try {
    const answers = await service.getAll(req.context);
    log.end();
    return response.data(res, answers);
  } catch (e) {
    log.error(e.message);
    return response.failure(res, e.message);
  }
};
exports.create = create;
exports.getAll = getAll;
