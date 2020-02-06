import list from 'modules/claims/list/claimsListReducers';
import form from 'modules/claims/form/claimsFormReducers';
import view from 'modules/claims/view/claimsViewReducers';
import destroy from 'modules/claims/destroy/claimsDestroyReducers';
import importerReducer from 'modules/claims/importer/claimsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
