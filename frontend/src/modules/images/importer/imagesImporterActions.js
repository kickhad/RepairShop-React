import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/images/importer/imagesImporterSelectors';
import ImagesService from 'modules/images/imagesService';
import fields from 'modules/images/importer/imagesImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'IMAGES_IMPORTER',
  selectors,
  ImagesService.import,
  fields,
  i18n('entities.images.importer.fileName'),
);
