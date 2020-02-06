import model from 'modules/device/deviceModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import TextViewItem from 'view/shared/view/TextViewItem';


const { fields } = model;

class DeviceView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <div>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.printerBrand.label}
          value={fields.printerBrand.forView(record.printerBrand)}
        />

        <TextViewItem
          label={fields.model.label}
          value={fields.model.forView(record.model)}
        />

        <TextViewItem
          label={fields.serial.label}
          value={fields.serial.forView(record.serial)}
        />

        <TextViewItem
          label={fields.orignalOrderNo.label}
          value={fields.orignalOrderNo.forView(record.orignalOrderNo)}
        />

        <TextViewItem
          label={fields.purchaseDate.label}
          value={fields.purchaseDate.forView(record.purchaseDate)}
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

export default DeviceView;
