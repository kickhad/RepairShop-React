import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/repairOrder/importer/repairOrderImporterSelectors';
import RepairOrderService from 'modules/repairOrder/repairOrderService';
import fields from 'modules/repairOrder/importer/repairOrderImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'REPAIRORDER_IMPORTER',
  selectors,
  RepairOrderService.import,
  fields,
  i18n('entities.repairOrder.importer.fileName'),
);
