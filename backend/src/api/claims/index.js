module.exports = (app) => {
  app.post(`/claims`, require('./claimsCreate'));
  app.put(`/claims/:id`, require('./claimsUpdate'));
  app.post(`/claims/import`, require('./claimsImport'));
  app.delete(`/claims`, require('./claimsDestroy'));
  app.get(
    `/claims/autocomplete`,
    require('./claimsAutocomplete'),
  );
  app.get(`/claims`, require('./claimsList'));
  app.get(`/claims/:id`, require('./claimsFind'));
};
