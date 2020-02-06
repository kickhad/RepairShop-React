import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/comments/importer/commentsImporterSelectors';
import CommentsService from 'modules/comments/commentsService';
import fields from 'modules/comments/importer/commentsImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'COMMENTS_IMPORTER',
  selectors,
  CommentsService.import,
  fields,
  i18n('entities.comments.importer.fileName'),
);
