'use strict';

const fs = require('fs');
const api = require('../api');
const specs = require('../specs');
const permit = require('../permit');
const validator = require('../validators');

var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname == 'csv') {
      cb(null, path.join(__dirname, '../', 'assets'));
    } else {
      cb(null, path.join(__dirname, '../', 'assets/images'));
    }
  },
  filename: function (req, file, cb) {
    if (file.fieldname == 'csv') {
      cb(null, file.originalname);
    } else {
      cb(null, Date.now() + file.originalname);
    }
  },
});

var upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 50 },
});

const configure = (app, logger) => {
  const log = logger.start('settings:routes:configure');
  app.get('/specs', function (req, res) {
    fs.readFile('./public/specs.html', function (err, data) {
      if (err) {
        return res.json({
          isSuccess: false,
          error: err.toString(),
        });
      }
      res.contentType('text/html');
      res.send(data);
    });
  });

  app.get('/api/specs', function (req, res) {
    res.contentType('application/json');
    res.send(specs.get());
  });
  app.post(
    '/api/answers/create',
    permit.context.builder,
    validator.answers.create,
    api.answers.create
  );
  app.get('/api/answers/getAll', permit.context.builder, api.answers.getAll);
  // ? user module
  app.get('/api/users/getAll', permit.context.builder, api.users.getAll);

  log.end();
};

exports.configure = configure;
