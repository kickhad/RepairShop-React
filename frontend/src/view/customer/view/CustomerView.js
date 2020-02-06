import model from 'modules/customer/customerModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import TextViewItem from 'view/shared/view/TextViewItem';


const { fields } = model;

class CustomerView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <div>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.name.label}
          value={fields.name.forView(record.name)}
        />

        <TextViewItem
          label={fields.email.label}
          value={fields.email.forView(record.email)}
        />

        <TextViewItem
          label={fields.city.label}
          value={fields.city.forView(record.city)}
        />

        <TextViewItem
          label={fields.province.label}
          value={fields.province.forView(record.province)}
        />

        <TextViewItem
          label={fields.country.label}
          value={fields.country.forView(record.country)}
        />

        <TextViewItem
          label={fields.address0.label}
          value={fields.address0.forView(record.address0)}
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

export default CustomerView;
