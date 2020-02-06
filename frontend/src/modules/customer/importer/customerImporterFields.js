import model from 'modules/customer/customerModel';

const { fields } = model;

export default [
  fields.name,
  fields.email,
  fields.city,
  fields.province,
  fields.country,
  fields.address0,
];
