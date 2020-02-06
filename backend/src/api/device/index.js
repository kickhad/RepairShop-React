module.exports = (app) => {
  app.post(`/device`, require('./deviceCreate'));
  app.put(`/device/:id`, require('./deviceUpdate'));
  app.post(`/device/import`, require('./deviceImport'));
  app.delete(`/device`, require('./deviceDestroy'));
  app.get(
    `/device/autocomplete`,
    require('./deviceAutocomplete'),
  );
  app.get(`/device`, require('./deviceList'));
  app.get(`/device/:id`, require('./deviceFind'));
};
