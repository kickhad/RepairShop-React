import list from 'modules/device/list/deviceListReducers';
import form from 'modules/device/form/deviceFormReducers';
import view from 'modules/device/view/deviceViewReducers';
import destroy from 'modules/device/destroy/deviceDestroyReducers';
import importerReducer from 'modules/device/importer/deviceImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
