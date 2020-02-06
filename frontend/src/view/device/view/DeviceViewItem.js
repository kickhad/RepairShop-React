import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectors from 'modules/device/deviceSelectors';
import MaterialLink from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';

class DeviceViewItem extends Component {
  valueAsArray = () => {
    const { value } = this.props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  displayableRecord = (record) => {
    if (this.props.hasPermissionToRead) {
      return (
        <div key={record.id}>
          <MaterialLink
            component={Link}
            to={`/device/${record.id}`}
          >
            {record['printerBrand']}
          </MaterialLink>
        </div>
      );
    }

    return <div key={record.id}>{record['printerBrand']}</div>;
  };

  render() {
    if (!this.valueAsArray().length) {
      return null;
    }

    return (
      <div style={{ marginBottom: '16px' }}>
        <Typography variant="subtitle2">
          {this.props.label}
        </Typography>
        {this.valueAsArray().map((value) =>
          this.displayableRecord(value),
        )}
      </div>
    );
  }
}

DeviceViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};

const select = (state) => ({
  hasPermissionToRead: selectors.selectPermissionToRead(
    state,
  ),
});

export default connect(select)(DeviceViewItem);
