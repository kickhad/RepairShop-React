import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import BooleanField from 'modules/shared/fields/booleanField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';
import FilesField from 'modules/shared/fields/filesField';

function label(name) {
  return i18n(`entities.repairOrder.fields.${name}`);
}

const fields = {
  id: new RelationToOneField('id', label('id')),
  customer: new RelationToOneField('customer', label('customer'), {
    "required": true
  }),
  products: new RelationToManyField('products', label('products'), {
    "required": true,
    "min": 1
  }),
  assignedTech: new RelationToOneField('assignedTech', label('assignedTech'), {}),
  delivered: new BooleanField('delivered', label('delivered')),
  attachments: new FilesField('attachments', label('attachments'), 'repairOrder/attachments',{
    "size": 1000000,
    "formats": [
      "txt",
      "pdf"
    ],
    "max": 3
  }),
  comments: new RelationToManyField('comments', label('comments'), {}),
  warrantyClaim: new RelationToManyField('warrantyClaim', label('warrantyClaim'), {}),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),

};

export default {
  fields,
};
