import list from 'modules/images/list/imagesListReducers';
import form from 'modules/images/form/imagesFormReducers';
import view from 'modules/images/view/imagesViewReducers';
import destroy from 'modules/images/destroy/imagesDestroyReducers';
import importerReducer from 'modules/images/importer/imagesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
