module.exports = (app) => {
  app.post(`/images`, require('./imagesCreate'));
  app.put(`/images/:id`, require('./imagesUpdate'));
  app.post(`/images/import`, require('./imagesImport'));
  app.delete(`/images`, require('./imagesDestroy'));
  app.get(
    `/images/autocomplete`,
    require('./imagesAutocomplete'),
  );
  app.get(`/images`, require('./imagesList'));
  app.get(`/images/:id`, require('./imagesFind'));
};
