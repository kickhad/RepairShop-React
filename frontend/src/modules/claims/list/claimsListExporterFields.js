import model from 'modules/claims/claimsModel';

const { fields } = model;

export default [
  fields.id,
  fields.manufacturer,
  fields.status,
  fields.createdAt,
  fields.updatedAt
];
