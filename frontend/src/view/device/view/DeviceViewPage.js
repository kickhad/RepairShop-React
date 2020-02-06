import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import DeviceView from 'view/device/view/DeviceView';
import { i18n } from 'i18n';
import actions from 'modules/device/view/deviceViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/device/view/deviceViewSelectors';
import DeviceViewToolbar from 'view/device/view/DeviceViewToolbar';

class DevicePage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.device.menu'), '/device'],
            [i18n('entities.device.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.device.view.title')}
          </PageTitle>

          <DeviceViewToolbar match={this.props.match} />

          <DeviceView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(DevicePage);
