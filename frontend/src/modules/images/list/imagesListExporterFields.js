import model from 'modules/images/imagesModel';

const { fields } = model;

export default [
  fields.id,
  fields.image,
  fields.thumbnail,
  fields.createdAt,
  fields.updatedAt
];
