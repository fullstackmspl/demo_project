const userBuild = async (model, context) => {
  const log = context.logger.start('services:users:build');

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
  const user = await db
    .user({
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
  return user;
};

const getAll = async (context) => {
  const log = context.logger.start('service:users:getAll');
  const users = await db.user.find();
  log.end();
  return users;
};
exports.userBuild = userBuild;
exports.getAll = getAll;
