module.exports = (app) => {
  app.post(`/repair-order`, require('./repairOrderCreate'));
  app.put(`/repair-order/:id`, require('./repairOrderUpdate'));
  app.post(`/repair-order/import`, require('./repairOrderImport'));
  app.delete(`/repair-order`, require('./repairOrderDestroy'));
  app.get(
    `/repair-order/autocomplete`,
    require('./repairOrderAutocomplete'),
  );
  app.get(`/repair-order`, require('./repairOrderList'));
  app.get(`/repair-order/:id`, require('./repairOrderFind'));
};
