import model from 'modules/repairOrder/repairOrderModel';

const { fields } = model;

export default [
  fields.customer,
  fields.products,
  fields.assignedTech,
  fields.delivered,
  fields.attachments,
  fields.comments,
  fields.warrantyClaim,
];
