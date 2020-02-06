import list from 'modules/comments/list/commentsListReducers';
import form from 'modules/comments/form/commentsFormReducers';
import view from 'modules/comments/view/commentsViewReducers';
import destroy from 'modules/comments/destroy/commentsDestroyReducers';
import importerReducer from 'modules/comments/importer/commentsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
