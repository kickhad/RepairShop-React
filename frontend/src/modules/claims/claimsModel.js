import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';

function label(name) {
  return i18n(`entities.claims.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.claims.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  manufacturer: new StringField('manufacturer', label('manufacturer'), {}),
  status: new EnumeratorField('status', label('status'), [
    { id: 'Open', label: enumeratorLabel('status', 'Open') },
    { id: 'Submitted', label: enumeratorLabel('status', 'Submitted') },
    { id: 'Denied', label: enumeratorLabel('status', 'Denied') },
    { id: 'Resolved', label: enumeratorLabel('status', 'Resolved') },
  ],{}),
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
