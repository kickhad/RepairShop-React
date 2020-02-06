const genericFixture = require('./genericFixture');
const CommentsRepository = require('../database/repositories/commentsRepository');

const commentsFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new CommentsRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = commentsFixture;
