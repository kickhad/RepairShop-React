const userFixture = require('./userFixture');
const customerFixture = require('./customerFixture');
const deviceFixture = require('./deviceFixture');
const repairOrderFixture = require('./repairOrderFixture');
const commentsFixture = require('./commentsFixture');
const imagesFixture = require('./imagesFixture');
const claimsFixture = require('./claimsFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  customer: customerFixture,
  device: deviceFixture,
  repairOrder: repairOrderFixture,
  comments: commentsFixture,
  images: imagesFixture,
  claims: claimsFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
