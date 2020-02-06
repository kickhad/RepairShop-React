import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/claims/importer/claimsImporterSelectors';
import ClaimsService from 'modules/claims/claimsService';
import fields from 'modules/claims/importer/claimsImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'CLAIMS_IMPORTER',
  selectors,
  ClaimsService.import,
  fields,
  i18n('entities.claims.importer.fileName'),
);
