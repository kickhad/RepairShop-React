import list from 'modules/repairOrder/list/repairOrderListReducers';
import form from 'modules/repairOrder/form/repairOrderFormReducers';
import view from 'modules/repairOrder/view/repairOrderViewReducers';
import destroy from 'modules/repairOrder/destroy/repairOrderDestroyReducers';
import importerReducer from 'modules/repairOrder/importer/repairOrderImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
