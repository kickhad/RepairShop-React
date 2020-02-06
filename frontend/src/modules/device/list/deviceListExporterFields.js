import model from 'modules/device/deviceModel';

const { fields } = model;

export default [
  fields.id,
  fields.printerBrand,
  fields.model,
  fields.serial,
  fields.orignalOrderNo,
  fields.purchaseDate,
  fields.createdAt,
  fields.updatedAt
];
