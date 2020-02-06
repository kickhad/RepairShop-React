const genericFixture = require('./genericFixture');
const ClaimsRepository = require('../database/repositories/claimsRepository');

const claimsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ClaimsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = claimsFixture;
