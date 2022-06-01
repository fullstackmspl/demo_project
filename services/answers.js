const { userBuild } = require('./users');
const answerBuild = async (model, context) => {
  const log = context.logger.start('services:answers:build');
  const {
    firstName,
    email,
    lastName,
    gender,
    dob,
    city,
    state,
    zipCode,
    country,
  } = model;
  const answer = await db
    .answer({
      firstName,
      email,
      lastName,
      gender,
      dob,
      city,
      state,
      zipCode,
      country,
    })
    .save();
  log.end();
  return answer;
};

const create = async (model, context) => {
  const log = context.logger.start('services:answers:create');
  const isExsit = await db.answer.findOne({ email: model.email });
  if (isExsit) {
    throw new Error('Email already exist');
  }
  const answer = await answerBuild(model, context);
  const user = await userBuild(model, context);
  log.end();
  return answer;
};

const getAll = async (context) => {
  const log = context.logger.start('services:answers:getAll');
  const getAll = await db.answer.find();
  log.end();
  return getAll;
};
exports.create = create;
exports.getAll = getAll;
