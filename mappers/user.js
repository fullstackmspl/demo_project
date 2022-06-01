'use strict';

const user = require('../models/user');

const imageUrl = require('config').get('image').url;

exports.toModel = (entity) => {
  const model = {
    _id: entity._id,
    userName: entity.userName,
    email: entity.email,
    // password: entity.password,
    email: entity.email,
    dob: entity.dob,
    phone: entity.phone,
    address: entity.address,
    country: entity.country,
    coins: entity.coins,
    plan: entity.plan || '',
    role: entity.role,
    socialLinkId: entity.socialLinkId,
    platform: entity.platform,
    createdOn: entity.createdOn,
    updatedOn: entity.updatedOn,
    token: entity.token,
    deviceToken: entity.deviceToken,
    status: entity.status,
    avatar:
      entity.avatar !== '' || entity.avatar !== undefined
        ? `${imageUrl}${entity.avatar}`
        : '',
  };

  // if (entity.image && entity.image.gallery && entity.image.gallery.length > 0) {
  //     for (let index = 0; index < entity.image.gallery.length; index++) {
  //         entity.image.gallery[index].image = `${imageUrl}${entity.image.gallery[index].image}`;
  //     }
  //     model.gallery = entity.image.gallery
  // }

  return model;
};

exports.toSearchModel = (entities) => {
  return entities.map((entity) => {
    return exports.toModel(entity);
  });
};
