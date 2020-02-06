import model from 'modules/repairOrder/repairOrderModel';

const { fields } = model;

export default [
  fields.id,
  fields.customer,
  fields.products,
  fields.assignedTech,
  fields.attachments,
  fields.comments,
  fields.warrantyClaim,
  fields.createdAt,
  fields.updatedAt
];
