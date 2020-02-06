import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import ImagesField from 'modules/shared/fields/imagesField';

function label(name) {
  return i18n(`entities.images.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  image: new ImagesField('image', label('image'), 'images/image',{}),
  thumbnail: new ImagesField('thumbnail', label('thumbnail'), 'images/thumbnail',{}),
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
