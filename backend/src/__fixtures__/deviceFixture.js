const genericFixture = require('./genericFixture');
const DeviceRepository = require('../database/repositories/deviceRepository');

const deviceFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new DeviceRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = deviceFixture;
