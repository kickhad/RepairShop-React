import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import DateField from 'modules/shared/fields/dateField';
import DateRangeField from 'modules/shared/fields/dateRangeField';

function label(name) {
  return i18n(`entities.device.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  printerBrand: new StringField('printerBrand', label('printerBrand'), {
    "required": true,
    "min": 2,
    "max": 255
  }),
  model: new StringField('model', label('model'), {
    "max": 21845
  }),
  serial: new StringField('serial', label('serial'), {}),
  orignalOrderNo: new StringField('orignalOrderNo', label('orignalOrderNo'), {}),
  purchaseDate: new DateField('purchaseDate', label('purchaseDate'), {}),
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
  purchaseDateRange: new DateRangeField(
    'purchaseDateRange',
    label('purchaseDateRange'),
  ),
};

export default {
  fields,
};
