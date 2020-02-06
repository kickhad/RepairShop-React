import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import RepairOrderView from 'view/repairOrder/view/RepairOrderView';
import { i18n } from 'i18n';
import actions from 'modules/repairOrder/view/repairOrderViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/repairOrder/view/repairOrderViewSelectors';
import RepairOrderViewToolbar from 'view/repairOrder/view/RepairOrderViewToolbar';

class RepairOrderPage extends Component {
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
            [i18n('entities.repairOrder.menu'), '/repair-order'],
            [i18n('entities.repairOrder.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.repairOrder.view.title')}
          </PageTitle>

          <RepairOrderViewToolbar match={this.props.match} />

          <RepairOrderView
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

export default connect(select)(RepairOrderPage);
