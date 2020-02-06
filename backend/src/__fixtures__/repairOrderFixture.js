const genericFixture = require('./genericFixture');
const RepairOrderRepository = require('../database/repositories/repairOrderRepository');

const repairOrderFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new RepairOrderRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = repairOrderFixture;
