module.exports = (app) => {
  app.post(`/comments`, require('./commentsCreate'));
  app.put(`/comments/:id`, require('./commentsUpdate'));
  app.post(`/comments/import`, require('./commentsImport'));
  app.delete(`/comments`, require('./commentsDestroy'));
  app.get(
    `/comments/autocomplete`,
    require('./commentsAutocomplete'),
  );
  app.get(`/comments`, require('./commentsList'));
  app.get(`/comments/:id`, require('./commentsFind'));
};
