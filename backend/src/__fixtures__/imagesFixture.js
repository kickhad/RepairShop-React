const genericFixture = require('./genericFixture');
const ImagesRepository = require('../database/repositories/imagesRepository');

const imagesFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ImagesRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = imagesFixture;
