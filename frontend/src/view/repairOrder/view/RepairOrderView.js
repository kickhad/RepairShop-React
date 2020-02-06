import model from 'modules/repairOrder/repairOrderModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import TextViewItem from 'view/shared/view/TextViewItem';
import UserViewItem from 'view/iam/view/UserViewItem';
import FilesViewItem from 'view/shared/view/FilesViewItem';
import CustomerViewItem from 'view/customer/view/CustomerViewItem';
import DeviceViewItem from 'view/device/view/DeviceViewItem';
import CommentsViewItem from 'view/comments/view/CommentsViewItem';
import ClaimsViewItem from 'view/claims/view/ClaimsViewItem';

const { fields } = model;

class RepairOrderView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <div>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <CustomerViewItem
          label={fields.customer.label}
          value={fields.customer.forView(record.customer)}
        />

        <DeviceViewItem
          label={fields.products.label}
          value={fields.products.forView(record.products)}
        />

        <UserViewItem
          label={fields.assignedTech.label}
          value={fields.assignedTech.forView(record.assignedTech)}
        />

        <TextViewItem
          label={fields.delivered.label}
          value={fields.delivered.forView(record.delivered)}
        />

        <FilesViewItem
          label={fields.attachments.label}
          value={fields.attachments.forView(record.attachments)}
        />

        <CommentsViewItem
          label={fields.comments.label}
          value={fields.comments.forView(record.comments)}
        />

        <ClaimsViewItem
          label={fields.warrantyClaim.label}
          value={fields.warrantyClaim.forView(record.warrantyClaim)}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(record.createdAt)}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(record.updatedAt)}
        />
      </div>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default RepairOrderView;
