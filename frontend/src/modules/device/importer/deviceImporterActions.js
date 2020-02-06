import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/device/importer/deviceImporterSelectors';
import DeviceService from 'modules/device/deviceService';
import fields from 'modules/device/importer/deviceImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'DEVICE_IMPORTER',
  selectors,
  DeviceService.import,
  fields,
  i18n('entities.device.importer.fileName'),
);
