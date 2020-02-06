import model from 'modules/comments/commentsModel';

const { fields } = model;

export default [
  fields.id,
  fields.comment,
  fields.images,
  fields.createdAt,
  fields.updatedAt
];
