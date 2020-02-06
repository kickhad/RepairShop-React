import model from 'modules/images/imagesModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import TextViewItem from 'view/shared/view/TextViewItem';
import ImagesViewItem from 'view/shared/view/ImagesViewItem';

const { fields } = model;

class ImagesView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <div>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <ImagesViewItem
          label={fields.image.label}
          value={fields.image.forView(record.image)}
        />

        <ImagesViewItem
          label={fields.thumbnail.label}
          value={fields.thumbnail.forView(record.thumbnail)}
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

export default ImagesView;
